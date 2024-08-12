import { AdverseStatus, PageInfo } from '../../src/types'
import { exaustão } from './exaustão'

export const AdverseStatusPageInfo: PageInfo<AdverseStatus[]> = {
  content: [exaustão]
}
