import './proficiencies-docs-page.css'
import { html, shell } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { isDataReady } from '../../data/init-data'
import { AttributeStore, ProficienciesStore, dataStore } from '../../data/stores'
import { docHeader } from '../../common'

export function proficienciesDocsPage() {

  return commonLayout(html`
    <div class="prof-doc-page">
      ${docHeader({ title: '&#128170;&#127997; Perícias' })}

      <section class="doc-content">
        ${shell(() => {
          const dataIsLoaded = isDataReady.get()

          if (!dataIsLoaded) {
            return new Text('Loading...')
          }

          return dataStore.proficiencies.map(prof => {
            const attr = AttributeStore.getAlias(prof.atribute)
            const categoryName = ProficienciesStore.getCategoryName(prof.category)

            return html`
              <div class="proficiency-doc-card">
                <h4 class="name">
                  ${prof.name} (${attr})
                </h4>
                <p class="type ${prof.category}">
                  Perícia de ${categoryName}
                </p>
                <p class="description">
                  ${prof.description}
                </p>
              </div>
            `
          })
        })}
      </section>
    </div>
  `)
}
