/** TAILWIND CSS */
import './index.css'

/** UNOCSS */
// import 'virtual:uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import { defaultConfig, plugin } from '@formkit/vue'
import { de, en, fr, it } from '@formkit/i18n'
import { rootClasses } from './../formkit.theme.ts'
import { genesisIcons } from '@formkit/icons'

const app = createApp(App);

app.use(plugin, defaultConfig({
  locales: { fr, en, de, it },
  locale: 'en',
  config: {
    rootClasses
  },
  icons: {
    ...genesisIcons,
  },
}))

app.mount('#app')
