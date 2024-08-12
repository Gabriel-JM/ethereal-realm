import { AdverseStatus, PageInfo } from '../../src/types'
import { exaustão } from './exaustão'
import { incendiado } from './incendiado'
import { molhado } from './molhado'

export const AdverseStatusPageInfo: PageInfo<AdverseStatus[]> = {
  content: [exaustão, incendiado, molhado]
}
