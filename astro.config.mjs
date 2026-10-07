// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import relativePaths from "./src/integrations/relative-paths";

// https://astro.build/config
export default defineConfig({
  site: "https://makeupacademymanila.com",
  integrations: [sitemap(), relativePaths()],
  redirects: {
    "/schedule": "/classes",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
