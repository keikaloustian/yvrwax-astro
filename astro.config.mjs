import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  output: "server",
  adapter: vercel()
});