import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from /Portfolio/. A relative base keeps
  // the built asset URLs correct even if the repository is renamed later.
  base: command === "build" ? "./" : "/",
  plugins: [react(), tailwindcss()],
}));
