import { isDataReady } from '@/data/init-data'
import { dataStore } from '@/data/stores'
import { html, raw, shell } from 'lithen-fns'
import { shieldTinyCard } from '../card/tiny/shield-tiny-card'

export function shieldDocPage() {
  return html`
    <div>
    ${shell(() => {
      const dataIsLoaded = isDataReady.get()

      if (!dataIsLoaded) {
        return new Text('Loading...')
      }

      const { description, content } = dataStore.items.shields

      return html`
        <div class="doc-description">
          <h1>🛡 Escudos</h1>

          <p class="attrs-content">${raw(description!)}</p>
        </div>

        <section class="doc-content">
          ${content.map(shieldTinyCard)}
        </section>
      `
    })}
    </div>
  `
}
