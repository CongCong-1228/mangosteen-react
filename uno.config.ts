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
  theme: {},
  shortcuts: [
    ["flex-center", "flex justify-center items-center"],
    ["flex-col-center", "flex-center flex-col"],
    ["j-btn", "h-48px w-100% bg-#ffd580 b-none text-#4a4a4a rounded-8px"],
  ],
  safelist: [],
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
