import { html, shell } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { docHeader } from '../../common'
import { isDataReady } from '../../data/init-data'
import { dataStore } from '../../data/stores'
import { commonItemDocCard } from './card/common-item-doc-card'

export function commonItemsPage() {
  return commonLayout(html`
    ${docHeader({ title: '&#x1F9EA; Itens Comuns' })}

    ${shell(() => {
      const isReady = isDataReady.get()

      if (!isReady) {
        return new Text('Loading...')
      }

      const { content, description } = dataStore.items.common

      return html`
        ${description && html`
          <p class="doc-description">
            ${description}
          </p>
        `}

        <section class="doc-content">
          ${content.map(commonItemDocCard)}
        </section>
      `
    })}
  `)
}
