import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  base: "/random-bid-generator-app/",
  plugins: [eslintPlugin({ cache: false })],
  root: "src",
  build: {
    outDir: "../dist",
  },
});
