import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const vinculoFeraMistica = <Skill> {
  id: 'huta_ECBQNmqsxC',
  title: 'Vínculo com Fera Mística',
  type: 'passive',
  description: join(
    'Você e uma fera mística se tornaram companheiros',
    'graças a uma amizade que foram cultivando, essa',
    'amizade evolui ao ponto de que você e seu parceiro',
    'estão dispostos a dar a vida um pelo outro, vocês',
    'estão selam seus destinos através de um ritual',
    'tornando esse vínculo algo até sobrenatural, ele',
    'garante vários benefícios para você e seu parceiro,',
    'contudo ele também pode vir com desvantagens. Vá',
    'a lista de Feras Místicas, para ver melhor as',
    'vantagens e desvantagens e escolher qual tipo',
    'de fera será seu aliado.'
  ),
  benefits: proficienciesList({ 'Tratar Animais': 1 })
}
