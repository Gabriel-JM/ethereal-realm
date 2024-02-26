import { html } from 'lithen-fns'
import { chevronLeftIcon } from '../icons'

export type BackButtonProps = {
  onClick?: (e: Event) => unknown
}

export function backButton({ onClick }: BackButtonProps = {}) {
  return html`
    <button
      class="back-button"
      on-click=${onClick}
    >
      ${chevronLeftIcon()}
    </button>
  `
}
