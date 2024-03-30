export function md(textArray: TemplateStringsArray | string[], ...values: unknown[]) {
  const fullText = textArray.reduce((acc, txt, index) => {
    const stringValue = String(values[index] ?? '')

    return acc + txt + stringValue
  }, '')

  return parseMarkDown(fullText)
}

export function parseMarkDown(text: string) {
  return text
    .replace(/(#{1,5})\s(.+)\n/g, parseTitle)
    .replace(/\[([^\]]+)\]\((.+)\)/g, '<app-link to="$2">$1</app-link>')
    .replace(/\[([^\]]+)\]:(\w+)/g, '<span class="$2">$1</span>')
    .replace(/\-{3}\n/g, '<div class="division-line"></div>')
    .replace(/(\*{1,3})([^*]+)\*{1,3}/g, parseAsterisk)
    .replace(/\n\s{2,}/g, ' ')
    .trim()
}

function parseAsterisk(_: string, asteritcs: string, text: string) {
  const classesByAsteriskCount = ["italic", "bold", "italic bold"]
  const asteriskCount = asteritcs.length
  const currentClass = classesByAsteriskCount[asteriskCount - 1]

  return `<span class="${currentClass}">${text}</span>`
}

function parseTitle(_: string, hashtags: string, text: string) {
  const hashtagCount = hashtags.length

  return `<h${hashtagCount}>${text}</h${hashtagCount}>`
}
