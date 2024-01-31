import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  theme: {
    boxShadow: {
      DEFAULT: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
  },
})
