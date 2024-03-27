import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import * as segments from './skill-segments'
import { proficiencies } from './proficiencies'
import * as commonItems from './items/common'
import { alphabeticSort } from './utils/alphabetic-sort'

for (const segment of Object.values(segments)) {
  const filePath = path.resolve('public', 'data', `${segment.id}.json`)
  await writeFile(filePath, JSON.stringify(segment))
}

await writeFile(
  path.resolve('public', 'data', 'proficiencies.json'),
  JSON.stringify(proficiencies)
)

const sortedCommonItems = Object
  .values(commonItems)
  .sort((a, b) => alphabeticSort(a.name, b.name))

await writeFile(
  path.resolve('public', 'data', 'common-items.json'),
  JSON.stringify(sortedCommonItems)
)
