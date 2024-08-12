import { dataStore } from '@/data/stores'
import { html, raw } from 'lithen-fns'
import { armorTinyCard } from '../card/tiny/armor-tiny-card'
import { whenDataIsReady } from '@/common/utils'

export function armorDocPage() {
  return html`
    <div>
    ${whenDataIsReady(() => {
      const { description, content } = dataStore.items.armors

      return html`
        <div class="doc-description">
          <h1>👕 Armaduras</h1>

          <details class="details-list">
            <summary><h3>Atributos</h3></summary>
            <p class="attrs-content">${raw(description!)}</p>
          </details>
        </div>

        <section class="doc-content">
          ${content.map(armorTinyCard)}
        </section>
      `
    })}
    </div>
  `
}
