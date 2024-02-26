import { css, html } from 'lithen-fns'

const headerStyles = css`
  & {
    padding: 8px 12px;
    background-color: var(--black-90);
    border-bottom: 1px solid var(--black-75);
  }
`

export function header() {
  return html`
    <header css=${headerStyles}>
      <h1>Ethereal</h1>
    </header>
  `
}
