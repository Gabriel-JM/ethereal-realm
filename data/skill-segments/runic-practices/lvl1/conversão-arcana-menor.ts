import { Skill } from '../../../../src/types'
import { detailsList, md } from '../../../utils'

export const conversãoArcanaMenor = <Skill> {
  id: 'rupr_u9Fuv4vWLK',
  title: 'Conversão Arcana Menor (Int)',
  type: 'active',
  description: md`
    Você é capaz de usar sua própria energia arcana para energizar
    um item mágico que irá restaurar uma carga já usada do item,
    essa habilidade não é capaz de ser usada se as cargas do item
    estiverem cheias. Você só pode restaurar uma carga por vez e
    deve usar a carga restaurada antes de recarregar outra. Você
    só é capaz de recarregar um item mágico por vez, utilizando
    esse método. Em combate você usa sua ação de movimento para
    restaurar uma carga. A quantidade de energia necessária
    dependerá da raridade do item.
    
    ${detailsList('Consumo por raridade', [
      '**Incomum** 4 PE',
      '**Raro** 10 PE',
      '**Épico** 22 PE',
      '**Lendário** 45 PE'
    ])}
  `
}
