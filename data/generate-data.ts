import { writeFile } from 'node:fs/promises'
import * as segments from './skill-segments'
import path from 'node:path'

for (const segment of Object.values(segments)) {
  const filePath = path.resolve('public', 'data', `${segment.id}.json`)
  await writeFile(filePath, JSON.stringify(segment))
}
