import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { whenDataIsReady } from '@/common/utils'
import { html } from 'lithen-fns'

export function adverseStatusDocPage() {
  return commonLayout(html`
    ${docHeader({ title: '🤒 Estados e Efeitos Adversos' })}

    <div class="doc-content">
      ${whenDataIsReady(() => html`
        <p>Loaded</p>
      `)}
    </div>
  `)
}
