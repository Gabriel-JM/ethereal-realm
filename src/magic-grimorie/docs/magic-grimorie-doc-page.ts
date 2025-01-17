import './magic-grimorie-doc-page.css'
import { docHeader } from '@/common'
import { magicIcon } from '@/common/icons'
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

  function clickBackdropClose(event: Event) {
    const currentTarget = event.currentTarget as HTMLDialogElement

    if (event.target === currentTarget) {
      currentTarget.close()
    }
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

    <dialog
      ref=${spellModalRef}
      class="spell-modal"
      on-click=${clickBackdropClose}
    >
      ${shell(() => {
        const spell = currentSpell.get()
        if (!spell) {
          return ''
        }

        const concentrationText = spell.concentration
          ? 'Requer Concentração.'
          : 'Não Requer Concentração.'

        return html`
          <figure>
            <img
              src="${spell.cover}"
              alt="Spell Cover Image"
            />
          </figure>
          <div class="spell-details" tabindex="1">
            <div class="spell-header">
              <h2 class="spell-name">
                  <span class="icon">
                    ${magicIcon()}
                  </span>
                <span>${spell.name}</span>
              </h2>
              <p>${spell.domains.join(' ')}</p>
            </div>

            <table class="spell-info-table">
              <tr>
                <td colspan="2" class="bold">
                  ${concentrationText}
                </td>
              </tr>
              <tr>
                <td class="bold">Custo</td>
                <td>${spell.energyCost} PE</td>
              </tr>
              <tr>
                <td class="bold">Efeito</td>
                <td>${spell.effect}</td>
              </tr>
              <tr>
                <td class="bold">Teste de Sucesso</td>
                <td>${spell.savingThrow ?? '-'}</td>
              </tr>
              <tr>
                <td class="bold">Tempo de Conjuração</td>
                <td>${spell.conjurationTime ?? 'Instantâneo'}</td>
              </tr>
              <tr>
                <td class="bold">Duração</td>
                <td>${spell.duration ?? 'Instantâneo'}</td>
              </tr>
              <tr>
                <td class="bold">Descrição</td>
                <td>${raw(spell.description)}</td>
              </tr>
            </table>
          </div>
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
    <div class="spell-section-container">
      <h2>Nível ${index + 1}</h2>
      <p>Requer: ${level.requirements}</p>

      <br/>

      <ul class="spells-list">
        ${level.items.map(item => html`
          <li>
            <div
              class="spell-tiny-card"
              title="${item.name}"
              on-click=${() => setSpell(item)}
            >
              <figure>
                <img
                  src="${item.cover}"
                  alt="Spell Cover Image"
                />
              </figure>
              <div class="spell-details">
                <h3 class="spell-title">
                  <span class="icon">
                    ${magicIcon()}
                  </span>
                  <span>${item.name}</span>
                </h3>
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
    </div>
  `
}
