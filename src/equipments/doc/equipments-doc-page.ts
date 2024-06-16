import './equipments-doc-page.css'
import { html, ref, shell, signal } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { docHeader } from '../../common'
import { weaponsDocPage } from '../weapons'
import { armorDocPage } from '../armors'
import { Armor, Weapon } from '@/types'
import { weaponDocCard } from '../weapons/doc/card/weapon-doc-card'
import { xIcon } from '@/common/icons'

export const selectedEquipment = signal<Weapon | Armor | null>(null)

export function equipmentsDocPage() {
  const equipContainerRef = ref<HTMLDivElement>()

  return commonLayout(html`
    ${docHeader({ title: '🛡 Equipamentos' })}

    ${weaponsDocPage()}

    ${armorDocPage()}

    <div ref=${equipContainerRef} class="selected-equip-container">
      ${shell(() => {
        const weapon = selectedEquipment.get()

        if (!weapon) {
          equipContainerRef.el?.classList.remove('open')
          return
        }

        equipContainerRef.el?.classList.add('open')

        return html`
          <div class="selected-equip-display">
            ${weaponDocCard(weapon as Weapon)}

            <button
              class="btn-close"
              on-click=${() => selectedEquipment.set(null)}
            >
              ${xIcon()}
            </button>
          </div>
        `
      })}
    </div>
  `)
}
