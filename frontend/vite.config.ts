import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    VITE_BACKEND_HOST: JSON.stringify(process.env.VITE_BACKEND_HOST),
  },
  plugins: [react()],
});
