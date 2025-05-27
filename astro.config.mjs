// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';  // <-- Importa React para Astro

export default defineConfig({
  integrations: [react()],  // <-- Agrega el integrador React aquí
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
