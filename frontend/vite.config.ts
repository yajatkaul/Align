// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT || 3000,
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
