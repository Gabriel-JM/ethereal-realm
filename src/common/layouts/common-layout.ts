import { html } from 'lithen-fns'
import { header } from '..'

export function commonLayout(element: Node) {
  return html`
    ${header()}
    ${element}
  `
}
