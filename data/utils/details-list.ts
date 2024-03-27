import { parseMarkDown } from '.'

export function detailsList(title: string, items: string[]) {
  return `
    <details class="benefits-details">
      <summary>${title}</summary>
      <ul class="list">
        ${items.map(
          item => `<li>${parseMarkDown(item)}</li>`
        ).join("")}
      </ul>
    </details>
  `
}
