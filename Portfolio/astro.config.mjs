import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: vercel({
    runtime: "nodejs22.x" 
  }),
  integrations: [tailwind(), react()],
});
