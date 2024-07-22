// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT || 1234,
    host: true,
    proxy: {
      "/api": {
        target: "http://align-backend.onrender.com/",
      },
    },
  },
});
