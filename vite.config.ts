import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/kids-drawing-app/",
  plugins: [react()],
});
