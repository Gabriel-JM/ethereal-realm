import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const kitEncantamentosArcanos = <CommonItem> {
  id: 'coit_XvSBBKtfro',
  name: 'Kit de Encantamentos Arcanos',
  icon: htmlEntity('CrystalBall'),
  cost: '$40.',
  description: md`
    Um kit simples que contem ferramentas específicas
    para se trabalhar com encantamentos, seja no gravar
    de runas em outros itens, o encantar de pergaminhos,
    criação de vínculos e afins. Se ainda não possuir o
    kit também vem com um **Selo Rúnico em Branco**.
  `
}
