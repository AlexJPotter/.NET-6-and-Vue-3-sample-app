import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import fs from "node:fs";
import type { ServerOptions } from "https";

const developmentCertificateName = "localhost.pfx";

const httpsSettings: ServerOptions = fs.existsSync(developmentCertificateName)
  ? {
      pfx: fs.readFileSync(developmentCertificateName),
      passphrase: "secret",
    }
  : {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: httpsSettings,
  },
});
