import {
  defineConfig,
  presetIcons,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [presetIcons(), presetAttributify(), presetWind3()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
