import './adverse-status-doc-page.css'
import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { whenDataIsReady } from '@/common/utils'
import { dataStore } from '@/data/stores'
import { html, raw } from 'lithen-fns'

export function adverseStatusDocPage() {
  return commonLayout(html`
    ${docHeader({ title: '🤒 Estados e Efeitos Adversos' })}

    <div class="doc-description adverse-status-page-content">
      ${whenDataIsReady(() => {
        const { content } = dataStore.adverseStatus

        return content.map(status => {
          return html`
            <div class="adverse-status-card">
              <h3 class="title">
                ${status.icon.value} ${status.name}
              </h3>
              <p>
                ${raw(status.description)}
              </p>
            </div>
          `
        })
      })}
    </div>
  `)
}
