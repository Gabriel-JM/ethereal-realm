import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { whenDataIsReady } from '@/common/utils'
import { dataStore } from '@/data/stores'
import { html, raw } from 'lithen-fns'

export function magicGrimorieDocPage() {
  return commonLayout(html`
    ${docHeader({ title: '📔 Grimório de Magias' })}

    ${whenDataIsReady(() => {
      const { description } = dataStore.magicGrimorie

      return html`
        ${description && html`
          <p class="doc-description">
            ${raw(description)}
          </p>
        `}
      `
    })}
  `)
}
