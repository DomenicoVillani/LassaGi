export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-primevue'],
  primevue: {
    options: { ripple: true },
    components: {
      exclude: ['Editor', 'Chart'],
    },
    directives: {
      include: ['Tooltip', 'Badge', 'Ripple'],
    },
  },
  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.scss',
    'primevue/resources/themes/lara-dark-purple/theme.css'
  ],
  ssr: false,
});

