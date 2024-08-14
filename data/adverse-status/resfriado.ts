import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const resfriado: AdverseStatus = {
  id: 'adst_0JTwXCIiZj',
  name: 'Resfriado',
  icon: { type: 'html-entity', value: '❄️' },
  description: md`
    Estado adquirido quando seu personagem fica em contato com
    o frio por muito tempo, algumas magias podem causar esse
    efeito simplesmente pelo contato.
    ---
    O efeito se desfaz com o tempo e podem ser usados elixires
    para cortar o efeito mais rápido. Em combate isso é contado
    por turnos, enquanto o efeito durar se recebe +50% (+ metade)
    do dano de [gelo]:blue, no mínimo 1, e os movimentos são
    reduzidos pela metade.
  `
}
