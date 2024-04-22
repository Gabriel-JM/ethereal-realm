import './weapons-doc-page.css'
import { html, raw, ref, shell, signal } from 'lithen-fns'
import { isDataReady } from '@/data/init-data'
import { dataStore } from '@/data/stores'
import { Weapon } from '@/types'
import { weaponDocCard } from './card/weapon-doc-card'
import { weaponTinyCard } from './card/tiny/weapon-tiny-card'
import { xIcon } from '@/common/icons'

export const selectedWeapon = signal<Weapon | null>(null)

export function weaponsDocPage() {
  const weaponContainerRef = ref<HTMLDivElement>()

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
            <h1>⚔️ Armas</h1>

            <p>${raw(description!)}</p>
          </div>

          <section class="doc-content">
            ${content.map(weaponTinyCard)}
          </section>
        `
      })}

      <div ref=${weaponContainerRef} class="selected-weapon-container">
        ${shell(() => {
          const weapon = selectedWeapon.get()

          if (!weapon) {
            weaponContainerRef.el?.classList.remove('open')
            return
          }

          weaponContainerRef.el?.classList.add('open')

          return html`
            <div class="selected-weapon-display">
              ${weaponDocCard(weapon)}

              <button
                class="btn-close"
                on-click=${() => selectedWeapon.set(null)}
              >
                ${xIcon()}
              </button>
            </div>
          `
        })}
      </div>
    </div>
  `
}
