import './equipments-doc-page.css'
import './equip-tiny-card.css'
import './equip-doc-card.css'
import { html, ref, shell, signal } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { docHeader } from '../../common'
import { weaponsDocPage } from '../weapons'
import { armorDocPage } from '../armors'
import { Armor, Shield, Weapon } from '@/types'
import { weaponDocCard } from '../weapons/doc/card/weapon-doc-card'
import { xIcon } from '@/common/icons'
import { armorDocCard } from '../armors/card/armor-doc-card'
import { shieldDocCard, shieldDocPage } from '../shields'

type Equip = Weapon | Armor | Shield | null

export function equipmentsDocPage() {
  const selectedEquipment = signal<Equip>(null)
  const equipContainerRef = ref<HTMLDivElement>()
  const equipDocCards = new Map()
    .set("weap", weaponDocCard)
    .set("armr", armorDocCard)
    .set("shld", shieldDocCard)

  const setEquip = (equip: Equip) => selectedEquipment.set(equip)

  return commonLayout(html`
    ${[
      docHeader({ title: '🛡 Equipamentos' }),
      weaponsDocPage(setEquip),
      armorDocPage(setEquip),
      shieldDocPage(setEquip)
    ]}

    <div ref=${equipContainerRef} class="selected-equip-container">
      ${shell(() => {
        const equip = selectedEquipment.get()

        if (!equip) {
          equipContainerRef.el?.classList.remove('open')
          return
        }

        equipContainerRef.el?.classList.add('open')

        const [equipIdType] = equip.id.split('_')
        const equipDocCard = equipDocCards.get(equipIdType)

        if (!equipDocCard) {
          console.error('Equipment type not found', equipIdType)
          return
        }

        return html`
          <div class="selected-equip-display">
            ${equipDocCard(equip)}

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
