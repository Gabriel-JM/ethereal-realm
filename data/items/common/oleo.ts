import { CommonItem } from '../../../src/types'
import { detailsList, htmlEntity, md } from '../../utils'

export const oleo = <CommonItem> {
  id: 'coit_YqMIOvLiaQ',
  name: 'Óleo',
  icon: htmlEntity('Urn'),
  cost: '$5 /Frasco.',
  description: md`
    Geralmente vem em um frasco de vidro ou argila
    que contém 250ml. Este item pode ser arremessado
    contra um alvo, espalhado no chão, usado como
    combustível, entre outras ações.

    ${detailsList('Efeitos', [
      `Caso um alvo esteja coberto de óleo e sofrendo
      algum tipo de dano de fogo, ele incendeia sofrendo
      4 pontos de dano de fogo adicional.`,
      `Caso acesso em alguma superfície qualquer personagem
      no local sofre 4 de dano de fogo por turno no local,
      as chamas duram 2 rodadas.`
    ])}
  `
}
