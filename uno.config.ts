// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, presetWind,  transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
        'formkit.theme.ts',
      ],
      // exclude files
      // exclude: []
    },
  },
  presets: [
    presetUno(),
    // presetWind()
  ],
})
