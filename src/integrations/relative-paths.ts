/* Path-independent URLs.
   `dist/` gets published from wherever it lands — a GitHub Pages project
   subpath, a domain root, or a double-clicked file — and root-absolute hrefs
   only work at a domain root. After the build, every internal URL is rewritten
   to be relative to the file that carries it. */
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

function htmlRewriter(outDir: string, file: string) {
  const up = upToRoot(outDir, file);
  return (source: string) =>
    source
      .replace(/\b(href|src)="(\/[^"]*)"/g, (_m, attr: string, path: string) => {
        if (path.startsWith("//")) return `${attr}="${path}"`; // protocol-relative, leave alone
        const [bare, hash] = path.split("#");
        const target = bare.replace(/\/index\.html$/, "").replace(/^\//, "").replace(/\/$/, "");
        const suffix = hash ? `#${hash}` : "";
        if (!target) return `${attr}="${up}index.html${suffix}"`;
        const isDirectory = existsSync(join(outDir, target, "index.html"));
        return `${attr}="${up}${target}${isDirectory ? "/" : ""}${suffix}"`;
      })
      .replace(/\bcontent="(\d+;url=)\/([^"]*)"/g, (_m, head: string, path: string) => {
        const target = path.replace(/\/$/, "").replace(/\/index\.html$/, "");
        const isDirectory = target !== "" && existsSync(join(outDir, target, "index.html"));
        return `content="${head}${up}${target}${isDirectory ? "/" : ""}"`;
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
