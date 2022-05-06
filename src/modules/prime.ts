import PrimeVue from 'primevue/config'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import { type UserModule } from '~/types'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Setup PrimeVue
// https://www.primefaces.org/
export const install: UserModule = ({ app }) => {
  app.use(PrimeVue)
  app.component('Accordion', Accordion)
  app.component('AccordionTab', AccordionTab)
}
