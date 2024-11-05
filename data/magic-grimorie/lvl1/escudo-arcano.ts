import { Spell } from '../../../src/types'
import { md } from '../../utils'

export const escudoArcano: Spell = {
  id: 'spll_YTZG5uaNSf',
  name: 'Escudo Arcano',
  concentration: false,
  domains: ['arcane', 'clerical', 'acustic'],
  energyCost: 1,
  effect: 'Absorve 3D6 de Dano',
  savingThrow: '2D6 + Destreza + Combate Defensivo contra o valor da jogada de ataque do atacante.',
  description: md`
    Um escudo de pura energia arcana é conjurado em sua frente,
    caso conjure como sua ação principal o escudo dura o até o
    próximo turno **sem necessidade de teste de sucesso**,
    caso contrário, ele pode ser conjurado como uma **reação.**

    Ele nega um máximo de **3D6 pontos de dano de qualquer elemento.**
    O escudo se dispersa após o primeiro dano recebido. 

    Quando conjurado como reação você deve ser bem sucedido em teste
    de 2D6 + Destreza + Combate Defensivo contra a **jogada de ataque**
    do atacante, caso falhe, o escudo nega somente metade do dano.
  `
}
