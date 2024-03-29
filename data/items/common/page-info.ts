import { CommonItem, PageInfo } from '../../../src/types'
import { alphabeticSort } from '../../utils/alphabetic-sort'
import * as commonItems from './index'

const sortedCommonItems = Object
  .values(commonItems)
  .sort((a, b) => alphabeticSort(a.name, b.name))

export const commonItemsPageInfo = <PageInfo<CommonItem[]>> {
  description: 
    'Itens podem ser usados no seu turno ao custo da ação do turno ou ação de defesa.',
  content: sortedCommonItems
}
