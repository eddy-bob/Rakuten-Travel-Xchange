import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/job01": {
        target: "https://hiring.zumata.xyz",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          path.replace(/^\/job01/, "");
        },
      },
    },
  },
  plugins: [vue()],
});
