// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import deno from "@deno/astro-adapter";
import react from '@astrojs/react';


export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
