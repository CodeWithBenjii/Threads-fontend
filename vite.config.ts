/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";


const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType : "prompt",
  includeAssets: [],
  manifest: {
    name: "Threads Clone",
    short_name:"Threads Clone",
    description:"A fullstack threads clone",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "192X192",
        type: "image/png",
        purpose: "apple touch icon"
      }
    ],
    theme_color: "#101010",
    background_color: "#101010",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation:"portrait"
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA(manifestForPlugin)],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})


