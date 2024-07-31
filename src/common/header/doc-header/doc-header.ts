import './doc-header.css'
import { html } from 'lithen-fns'
import { backButton } from '../../buttons'
import { nav } from '../../../config'

export type DocHeaderProps = {
  title: string
  backPath?: string
  img?: Node
}

export function docHeader({ title, img, backPath = '/' }: DocHeaderProps) {
  return html`
    <header class="doc-header">
      <div>
        ${backButton({ onClick: nav(backPath) })}
      </div>

      <div class="title">
        ${img}
        <h3>${title}</h3>
      </div>
    </header>
  `
}
