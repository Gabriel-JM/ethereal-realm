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

        <div>
          ${levels.map(magicGrimorieLevelSection)}
        </div>
      `
    })}
  `)
}

function magicGrimorieLevelSection(level: CollectionLevel<Spell>, index: number) {
  function spellAttributes(spell: Spell) {
    return Object.entries(spell).map(([key, value]) => {
      if (String(key) === 'name' || String(key) === 'id') {
        return ''
      }

      if (String(key) === 'cover') {
        return html`
         <img src="${value}" alt="Spell Cover Image" width="180" height="100" /> 
        `
      }

      return html`
        <p>
          <span class="bold">${key}: </span>
          <span>${raw(value.toString())}</span>
        </p>
      `
    })
  }
  
  return html`
    <h2>Nível ${index + 1}</h2>
    <p>Requer: ${level.requirements}</p>

    <br/>

    <ul>
      ${level.items.map(item => html`
        <li style="padding: 20px 0">
          <h3>${item.name}</h3>
          ${spellAttributes(item)}
        </li>
        <hr/>  
      `)}
    </ul>
  `
}
