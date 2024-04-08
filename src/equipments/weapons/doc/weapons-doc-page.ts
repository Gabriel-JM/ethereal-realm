import { html, raw, shell } from 'lithen-fns'
import { isDataReady } from '../../../data/init-data'
import { dataStore } from '../../../data/stores'
import { weaponDocCard } from './card/weapon-doc-card'

export function weaponsDocPage() {
  return html`
    <div class="weapons-doc-page">
      ${shell(() => {
        const dataIsLoaded = isDataReady.get()

        if (!dataIsLoaded) {
          return new Text('Loading...')
        }

        const { description, content } = dataStore.items.weapons

        return html`
          <div class="doc-description">
            <h3>Armas</h3>

            <p>${raw(description!)}</p>
          </div>

          <section class="doc-content">
            ${content.map(weaponDocCard)}
          </section>
        `
      })}
    </div>
  `
}
