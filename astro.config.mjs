import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  site: "https://Kirikmelet.github.io",
  base: "/derrenomo-site",
  server: {
    host: true,
  },
});
