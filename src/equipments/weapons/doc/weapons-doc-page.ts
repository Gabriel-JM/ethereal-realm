import { html, raw, shell } from 'lithen-fns'
import { isDataReady } from '../../../data/init-data'
import { dataStore } from '../../../data/stores'

export function weaponsDocPage() {
  return html`
    <div class="weapons-doc-page">
      <h3>Armas</h3>

      ${shell(() => {
        const dataIsLoaded = isDataReady.get()

        if (!dataIsLoaded) {
          return new Text('Loading...')
        }

        const { description, content } = dataStore.items.weapons

        return html`
          <p class="doc-description">
            ${raw(description!)}
          </p>

          <section class="doc-content">
            ${content.map(props => {
              return html`
                <div>
                  <h4>${props.name}</h4>
                </div>
              `
            })}
          </section>
        `
      })}
    </div>
  `
}
