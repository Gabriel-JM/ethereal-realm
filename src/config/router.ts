import { LithenRouter } from 'lithen-router'
import { homePage } from '../home'
import { proficiencyCalculator } from '../proficiency'
import { html } from 'lithen-fns'
import { skillSegmentDocPage } from '../skills'
import { proficienciesDocsPage } from '../proficiency/docs/proficiencies-docs-page'

export const router = new LithenRouter({
  '/': homePage,
  '/docs/proficiencies': proficienciesDocsPage,
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
