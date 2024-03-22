import { html } from 'lithen-fns'
import { AppElement } from '..'
import { nav } from '../../config'

export class AppLink extends AppElement {
  render() {
    const target = this.getAttribute("to") ?? "/"

    return html`
      <a class="link" on-click=${nav(target)}>
        ${[...this.childNodes]}
      </a>
    `
  }
}

customElements.define('app-link', AppLink)
