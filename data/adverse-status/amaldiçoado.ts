import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const amaldiçoado: AdverseStatus = {
  id: 'adst_6vJOBFnwT0',
  name: 'Amaldiçoado',
  icon: { type: 'html-entity', value: '☠️' },
  description: md`
    Estado adquirido de maneira mágica.
    <br/>
    Maldições podem tomar várias formas e causarem vários efeitos
    adversos em conjunto, são versões malignas das bençãos.
    ---
    Como esse tipo de malefício não tem uma origem ou efeito bem
    definido nem sempre haverá elixires ou poções capazes de curar
    esses efeitos por completo.
    <br/>
    Uma das maldições mais comuns é a **Maldição de Fraqueza**.
    Esta maldição causa um nível de exaustão no alvo até o efeito
    durar ou ser removido.
  `
}
