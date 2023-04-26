import i18next from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'

import en from './Translations/En'
import ru from './Translations/Ru'

i18next
  .use(LngDetector)
  .init({
    interpolation: {
      escapeValue: false
    },
    lng: 'en',
    resources: {
      en, ru
    }
  })

export default i18next
