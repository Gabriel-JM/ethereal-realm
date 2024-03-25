import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const brandirEnergiaRunica = <Skill> {
  id: 'rupr_pNzM7TFiAa',
  title: 'Brandir Energia Rúnica (Int)',
  type: 'active',
  properties: {
    cost: '3 PE.'
  },
  description: md`
    Você imbui temporariamente runas na lâmina ou local
    de impacto de uma arma que contém pura energia arcana
    e ao brandir a arma a energia liberada cobrindo a
    lâmina em uma espécie de chama azulada e meio roxa.
    O dano da arma que você está usando é completamente
    convertido para dano mágico, somado com o valor da
    perícia de Arcanismo, durante esse ataque. Caso o alvo
    esquive ou bloquei o ataque, ele ainda recebe **metade do dano**.
  `,
  benefits: proficienciesList({ "Combate Corpo a Corpo": 1 })
}
