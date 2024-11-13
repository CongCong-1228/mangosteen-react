import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(48px, 1fr))",
      },
    },
  },
  shortcuts: [
    ["flex-center", "flex justify-center items-center"],
    ["flex-col-center", "flex-center flex-col"],
    ["j-btn", "h-48px w-100% bg-#ffd580 b-none text-#4a4a4a rounded-8px"],
  ],
  safelist: [],
  rules: [["h-screen", { height: "calc(100vh - var(--vh-offset, 0px))" }]],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "Inter:400,600,700",
      },
    }),
  ],
  transformers: [transformerAttributifyJsx()],
});
