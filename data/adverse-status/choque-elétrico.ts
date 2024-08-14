import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const choqueEletrico: AdverseStatus = {
  id: 'adst_JCcoh0SXTa',
  name: 'Choque Elétrico',
  icon: { type: 'html-entity', value: '⚡' },
  description: md`
    Estado adquirido de maneira natural ao ser atingido por uma
    descarga elétrica ou magicamente.
    ---
    O efeito é instantâneo e graças a isso não pode ser curado,
    mas pode ser aumentada a resistência a ele com elixires. Em
    combate quando um alvo recebe um [choque elétrico]:blue ele
    recebe uma paralisia instantânea que faz com que o alvo
    perca o resto do seu turno.
    <br/>
    Se o alvo atingido estiver com concentração ativa, ela se
    perde instantaneamente.
  `
}
