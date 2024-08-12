import { html } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { docHeader } from '../../common'
import { dataStore } from '../../data/stores'
import { commonItemDocCard } from './card/common-item-doc-card'
import { whenDataIsReady } from '@/common/utils'

export function commonItemsPage() {
  return commonLayout(html`
    ${docHeader({ title: '&#x1F9EA; Itens Comuns' })}

    ${whenDataIsReady(() => {
      const { content, description } = dataStore.items.common

      return html`
        ${description && html`
          <p class="doc-description">
            ${description}
          </p>
        `}

        <section class="doc-grid-content">
          ${content.map(commonItemDocCard)}
        </section>
      `
    })}
  `)
}
