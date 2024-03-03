import { nav } from '../../config'
import './header.css'
import { html } from 'lithen-fns'

export function header() {
  return html`
    <header class="main-header">
      <div class="container">
        <h1 on-click=${nav('/')}>
          Ethereal Realm
        </h1>
      </div>
    </header>
  `
}
