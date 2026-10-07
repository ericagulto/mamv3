/* Path-independent URLs.
   `dist/` gets published from wherever it lands — a GitHub Pages project
   subpath, a domain root, or a double-clicked file — and root-absolute hrefs
   only work at a domain root. After the build, every internal URL is rewritten
   to be relative to the file that carries it.
   Directory routes resolve to an explicit `index.html` rather than a bare
   trailing slash: a server maps `/about/` to its index, but the file:// scheme
   just shows a folder listing, and the literal file works in all three. */
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

function walk(dir: string, extension: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walk(full, extension);
    return entry.endsWith(extension) ? [full] : [];
  });
}

function upToRoot(outDir: string, file: string): string {
  const depth = relative(outDir, file).split(/[\\/]/).length - 1;
  return depth === 0 ? "./" : "../".repeat(depth);
}

function toRelative(outDir: string, up: string, path: string): string {
  if (path.startsWith("//")) return path; // protocol-relative, leave alone
  const [bare, hash] = path.split("#");
  const target = bare.replace(/\/index\.html$/, "").replace(/^\//, "").replace(/\/$/, "");
  const suffix = hash ? `#${hash}` : "";
  if (!target) return `${up}index.html${suffix}`;
  const isDirectory = existsSync(join(outDir, target, "index.html"));
  return `${up}${target}${isDirectory ? "/index.html" : ""}${suffix}`;
}

function htmlRewriter(outDir: string, file: string) {
  const up = upToRoot(outDir, file);
  return (source: string) =>
    source
      .replace(/\b(href|src)="(\/[^"]*)"/g, (_m, attr: string, path: string) => `${attr}="${toRelative(outDir, up, path)}"`)
      // srcset is a comma-separated candidate list, so it needs its own pass:
      // the mobile hero frame is picked through it and was left root-absolute.
      .replace(/\bsrcset="([^"]*)"/g, (_m, list: string) => {
        const candidates = list
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean)
          .map((c) => {
            const [url, ...descriptor] = c.split(/\s+/);
            const rewritten = url.startsWith("/") ? toRelative(outDir, up, url) : url;
            return [rewritten, ...descriptor].join(" ");
          });
        return `srcset="${candidates.join(", ")}"`;
      })
      .replace(/\bcontent="(\d+;url=)\/([^"]*)"/g, (_m, head: string, path: string) => {
        const target = path.replace(/\/$/, "").replace(/\/index\.html$/, "");
        const isDirectory = target !== "" && existsSync(join(outDir, target, "index.html"));
        return `content="${head}${up}${target}${isDirectory ? "/index.html" : ""}"`;
      })
      .replace(/url\(\/([^)]*)\)/g, (_m, path: string) => `url(${up}${path.replace(/\/$/, "")})`);
}

export default function relativePaths(): AstroIntegration {
  let outDir = "";

  return {
    name: "relative-paths",
    hooks: {
      "astro:config:setup": ({ config }) => {
        outDir = fileURLToPath(config.outDir);
      },
      "astro:build:done": () => {
        for (const file of walk(outDir, ".html")) {
          const rewrite = htmlRewriter(outDir, file);
          const source = readFileSync(file, "utf-8");
          const rewritten = rewrite(source);
          if (rewritten !== source) writeFileSync(file, rewritten);
        }

        for (const file of walk(outDir, ".css")) {
          const up = upToRoot(outDir, file);
          const source = readFileSync(file, "utf-8");
          const rewritten = source.replaceAll("url(/", `url(${up}`);
          if (rewritten !== source) writeFileSync(file, rewritten);
        }
      },
    },
  };
}
