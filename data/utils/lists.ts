import { parseMarkDown } from '.'

export function list(...items: string[]) {
  return `
    <ul class="list">
      ${items.map(
        item => `<li>${parseMarkDown(item)}</li>`
      ).join("")}
    </ul>
  `
}

export function detailsList(title: string, items: string[]) {
  return `
    <details class="details-list">
      <summary>${title}</summary>
      <ul class="list">
        ${items.map(
          item => `<li>${parseMarkDown(item)}</li>`
        ).join("")}
      </ul>
    </details>
  `
}
