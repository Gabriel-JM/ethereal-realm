export function md(textArray: TemplateStringsArray, ...values: unknown[]) {
  const fullText = textArray.reduce((acc, txt, index) => {
    const stringValue = String(values[index] ?? '')

    return acc + txt + stringValue
  }, '')

  return parseMarkDown(fullText)
}

function parseMarkDown(text: string) {
  return text
    .replace(/\n\s{2,}/g, ' ')
    .replace(/\[(.+)\]\((.+)\)/g, '<a class="link" href="$2">$1</a>')
    .replace(/(\*{1,3})([^*.]+)\*{1,3}/g, parseAsterisk)
    .replace(/(#{1,5})\s(.+)\n/g, parseTitle)
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
