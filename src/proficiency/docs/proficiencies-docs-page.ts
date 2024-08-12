import './proficiencies-docs-page.css'
import { html, raw } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { AttributeStore, ProficienciesStore, dataStore } from '../../data/stores'
import { docHeader } from '../../common'
import { Proficiency } from '../../types'
import { whenDataIsReady } from '@/common/utils'

export function proficienciesDocsPage() {
  return commonLayout(html`
    <div class="prof-doc-page">
      ${docHeader({ title: '&#128170;&#127997; Perícias' })}

      ${whenDataIsReady(() => {
        const { description, content } = dataStore.proficiencies

        return html`
          <p class="doc-description">
            ${raw(description!)}
          </p>

          <section class="doc-grid-content">
            ${content.map(proficiencyDocCard)}
          </section>
        `
      })}
    </div>
  `)
}

type ProficiencyDocCardProps = Proficiency

function proficiencyDocCard(props: ProficiencyDocCardProps) {
  const attr = AttributeStore.getAlias(props.atribute)
  const categoryName = ProficienciesStore.getCategoryName(props.category)

  return html`
    <div class="proficiency-doc-card">
      <h4 class="name">
        ${props.name} (${attr})
      </h4>
      <p class="type ${props.category}">
        Perícia de ${categoryName}
      </p>
      <p class="description">
        ${props.description}
      </p>
    </div>
  `
}
