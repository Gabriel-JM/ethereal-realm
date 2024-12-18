import './magic-grimorie-doc-page.css'
import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { whenDataIsReady } from '@/common/utils'
import { dataStore } from '@/data/stores'
import { CollectionLevel, Spell } from '@/types'
import { html, raw, ref, shell, signal } from 'lithen-fns'

export function magicGrimorieDocPage() {
  const currentSpell = signal<Spell | null>(null)
  const spellModalRef = ref<HTMLDialogElement>()

  function setSpell(spell: Spell | null) {
    currentSpell.set(spell)
    spell && spellModalRef.el?.showModal()
  }

  return commonLayout(html`
    ${docHeader({ title: '📔 Grimório de Magias' })}

    ${whenDataIsReady(() => {
      const { description, levels } = dataStore.magicGrimorie

      return html`
        ${description && html`
          <p class="doc-description">
            ${raw(description)}
          </p>
        `}

        <div class="doc-description">
          ${levels.map((lvl, i) => magicGrimorieLevelSection(lvl, i, setSpell))}
        </div>
      `
    })}

    <dialog ref=${spellModalRef}>
      ${shell(() => {
        const spell = currentSpell.get()
        if (!spell) {
          return ''
        }

        return html`
          <figure>
            <img
              src="${spell.cover}"
              alt="Spell Cover Image"
            />
          </figure>
          <h2>${spell.name}</h2>
          <p>${spell.domains.join(' ')}</p>

          <button on-click=${() => spellModalRef.el?.close()}>
            Close
          </button>
        `
      })}
    </dialog>
  `)
}

function magicGrimorieLevelSection(
  level: CollectionLevel<Spell>,
  index: number,
  setSpell: (spell: Spell | null) => void
) {
  return html`
    <h2>Nível ${index + 1}</h2>
    <p>Requer: ${level.requirements}</p>

    <br/>

    <ul class="spells-list">
      ${level.items.map(item => html`
        <li>
          <div class="spell-tiny-card" on-click=${() => setSpell(item)}>
            <figure>
              <img
                src="${item.cover}"
                alt="Spell Cover Image"
              />
            </figure>
            <div class="spell-details">
              <h3 class="spell-title">${item.name}</h3>
              <div class="spell-domains">
                <p>${item.domains.join(' ')}</p>
              </div>
              <p>
                <span class="bold">Custo: </span>
                <span>${item.energyCost}</span>
              </p>
              <p class="spell-effect">${item.effect}</p>
            </div>
          </div>
        </li>
      `)}
    </ul>
  `
}
