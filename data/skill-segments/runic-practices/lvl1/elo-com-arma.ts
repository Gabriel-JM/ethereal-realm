import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const eloComArma = <Skill> {
  id: 'rupr_Co3twXg4rY',
  title: 'Elo com Arma (Int)',
  type: 'active',
  properties: {
    requirements: 'Kit de Encantamentos Arcanos.'
  },
  description: md`
    Você faz um ritual simples que cria um elo entre seu
    selo rúnico com uma arma. Esse elo permite que você
    invoque a arma de volta a alguma de suas mãos sempre
    que quiser, a arma não voa de volta a sua mão, ela se
    torna energia e some do local onde está e com um feixe
    de luz aparece em sua mão. Isso é considerado uma ação
    bonus, você deve estar a pelo menos um raio de 4 metros
    da sua arma e só pode ser executada tendo seu selo
    rúnico contigo. Você pode por exemplo arremessar uma
    arma e invocar ela de volta a sua mão no mesmo turno.
  `,
  benefits: proficienciesList({ Arcanismo: 1 })
}
