import './magic-grimorie-doc-page.css'
import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { whenDataIsReady } from '@/common/utils'
import { dataStore } from '@/data/stores'
import { CollectionLevel, Spell } from '@/types'
import { html, raw } from 'lithen-fns'

export function magicGrimorieDocPage() {
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
          ${levels.map(magicGrimorieLevelSection)}
        </div>
      `
    })}
  `)
}

function magicGrimorieLevelSection(level: CollectionLevel<Spell>, index: number) {
  return html`
    <h2>Nível ${index + 1}</h2>
    <p>Requer: ${level.requirements}</p>

    <br/>

    <ul class="spells-list">
      ${level.items.map(item => html`
        <li>
          <div class="spell-tiny-card">
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
