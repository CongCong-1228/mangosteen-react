import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/

// export default ({ command, mode }) => {
//   console.log("command", command);
//   return defineConfig({
//     plugins: [
//       UnoCSS(),
//       react(),
//       viteMockServe({
//         mockPath: "mock",
//         enable: command === "serve",
//       }),
//     ],
//   });
// };

export default defineConfig(({ command }) => ({
  define: {
    isDev: command === "serve",
  },
  plugins: [UnoCSS(), react(), viteMockServe()],
}));
