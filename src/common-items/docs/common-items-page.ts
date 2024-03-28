import { html, shell } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { docHeader } from '../../common'
import { isDataReady } from '../../data/init-data'
import { dataStore } from '../../data/stores'

export function commonItemsPage() {
  return commonLayout(html`
    ${docHeader({ title: '&#x1F9EA; Itens Comuns' })}

    <section>
      ${shell(() => {
        const isReady = isDataReady.get()

        if (!isReady) {
          return new Text('Loading...')
        }

        return dataStore.items.common.map(item => {
          function icon() {
            if (item.icon.type === 'image') {
              return html`
                <img
                  src="${item.icon.value}"
                  alt="Item Icon"
                />
              `
            }

            return item.icon.value
          }
          
          return html`
            <h4>${icon()} ${item.name}</h4>
            <p>
              <span class="bold">Cost: </span>
              ${item.cost}
            </p>
            <p>${item.description}</p>
          `
        })
      })}
    </section>
  `)
}
