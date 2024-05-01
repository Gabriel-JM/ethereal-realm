import { isDataReady } from '@/data/init-data'
import { dataStore } from '@/data/stores'
import { html, raw, shell } from 'lithen-fns'

export function armorDocPage() {
  return html`
    <div>
    ${shell(() => {
      const dataIsLoaded = isDataReady.get()

      if (!dataIsLoaded) {
        return new Text('Loading...')
      }

      const { description, content } = dataStore.items.armors

      return html`
        <div class="doc-description">
          <h1>⚔️ Armaduras</h1>

          <details class="details-list">
            <summary><h3>Atributos</h3></summary>
            <p class="attrs-content">${raw(description!)}</p>
          </details>
        </div>

        <section class="doc-content">
        </section>
      `
    })}
    </div>
  `
}
