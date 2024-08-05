import { LithenRouter } from 'lithen-router'
import { homePage } from '../home'
import { proficiencyCalculator } from '../proficiency'
import { html } from 'lithen-fns'
import { skillSegmentDocPage } from '../skills'
import { proficienciesDocsPage } from '../proficiency/docs/proficiencies-docs-page'
import { commonItemsPage } from '../common-items/docs/common-items-page'
import { equipmentsDocPage } from '../equipments'
import { rulesDocPage } from '@/rules/rules-doc-page'
import { createCharDocPage } from '@/rules/character/create-char-doc-page'
import { levelingUpCharDocPage } from '@/rules/character/leveling-up-char-doc-page'

export const router = new LithenRouter({
  '/': homePage,
  '/docs/proficiencies': proficienciesDocsPage,
  '/docs/items/common': commonItemsPage,
  '/docs/equips': equipmentsDocPage,
  '/docs/rules': rulesDocPage,
  '/docs/rules/create-character': createCharDocPage,
  '/docs/rules/leveling-up-character': levelingUpCharDocPage,
  '/docs/:skillId': skillSegmentDocPage,
  '/prof-calc': proficiencyCalculator,
  notFound: () => html`
    <p>Not Found</p>
    <a on-click=${() => router.navigate('/')}>
      Home
    </a>
  `
})

export const nav = (path: string) => () => router.navigate(path)
