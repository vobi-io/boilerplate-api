const i18next = require('i18next')
const middleware = require('i18next-express-middleware')

const localeEN = require('app/i18next/locales/en.json')

i18next.use(middleware.LanguageDetector).init({
  detection: {
    order: ['path', 'querystring', 'header'],
    lookupQuerystring: 'locale',
    lookupHeader: 'accept-language',
    lookupPath: 'locale',
    lookupFromPathIndex: 0
  },
  preload: ['en', 'ge'],
  whitelist: ['en', 'ge'],
  fallbackLng: 'en',
  resources: {
    en: { translation: localeEN }
  }
})

i18next.defaultLocale = 'en'
