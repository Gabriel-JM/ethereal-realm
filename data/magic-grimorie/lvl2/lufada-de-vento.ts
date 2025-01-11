import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const lufadaDeVento: Spell = {
  id: 'spll_F49IlzIfOD',
  name: 'Lufada de Vento',
  cover: supabaseStorageURL + 'lufada-de-vento.webp',
  concentration: true,
  domains: ['arcane', 'acustic'],
  energyCost: 3,
  effect: 'Rajada de 5 / 2 metros.',
  savingThrow: '2D6 + Força + Constituição do Alvo contra sua CD de 6 + Habilidade de Conjuração.',
  duration: '3 Turnos',
  description: md`
    Partindo de você é criada uma corrente reta de vento forte, na
    direção que você desejar e com um comprimento de 5 metros e
    largura de 2 metros. Todas as criaturas dentro da área e que
    começam seu turno no local, devem fazer um teste de **resistência
    de força** ou serão **empurradas 3 metros**.

    Caso uma criatura que for empurrada bater em algo sólido recebe
    **1D6 + Perícia de Conjuração** de Dano de Impacto.

    Qualquer criatura na linha deve gastar 1 metro a mais de movimentação
    para cada 1 metro que ela se mover enquanto se aproxima de você.
    As rajadas dispersam tudo que seja ar ou gases, e empurram tudo que
    seja leve o suficiente para ser levado pelo vento.

    Você não pode se mover enquanto a magia durar, mas você pode
    cancelar ela antes da duração acabar ou usar um ação para mudar
    a direção das rajadas.
  `
}
