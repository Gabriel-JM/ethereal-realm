import './link.css'
import { html } from 'lithen-fns'
import { nav } from '../../config'

export type LinkProps = {
  path: string
  content: string | Node
}

export const link = ({ path, content }: LinkProps) => html`
  <a class="link" on-click=${nav(path)}>${content}</a>
`
