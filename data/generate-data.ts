import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import * as segments from './skill-segments'
import { proficienciesPageInfo } from './proficiencies'
import { commonItemsPageInfo } from './items/common/page-info'
import { weaponsPageInfo } from './items/equipments/weapons/page-info'
import { armorsPageInfo } from './items/equipments/armors/page-info'

for (const segment of Object.values(segments)) {
  const filePath = path.resolve('public', 'data', `${segment.id}.json`)
  await writeFile(filePath, JSON.stringify(segment))
}

const contents = [
  { path: ['proficiencies.json'], data: proficienciesPageInfo },
  { path: ['common-items.json'], data: commonItemsPageInfo },
  { path: ['weapons.json'], data: weaponsPageInfo },
  { path: ['armors.json'], data: armorsPageInfo }
]

for (const content of contents) {
  await writeFile(
    path.resolve('public', 'data', ...content.path),
    JSON.stringify(content.data)
  )
}
