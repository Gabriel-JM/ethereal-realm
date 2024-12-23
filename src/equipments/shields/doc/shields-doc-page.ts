import { dataStore } from '@/data/stores'
import { html, raw } from 'lithen-fns'
import { shieldTinyCard } from '../card/tiny/shield-tiny-card'
import { whenDataIsReady } from '@/common/utils'
import { Shield } from '@/types'

export function shieldDocPage(setEquip: (equip: Shield | null) => void) {
  return html`
    <div>
    ${whenDataIsReady(() => {
      const { description, content } = dataStore.items.shields

      return html`
        <div class="doc-description">
          <h1>🛡 Escudos</h1>

          <p class="attrs-content">${raw(description!)}</p>
        </div>

        <section class="doc-content">
          ${content.map(shield => shieldTinyCard({
            ...shield,
            setEquip
          }))}
        </section>
      `
    })}
    </div>
  `
}
