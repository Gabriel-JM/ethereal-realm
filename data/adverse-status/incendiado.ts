import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const incendiado: AdverseStatus = {
  id: 'adst_PoadpLNOXx',
  name: 'Incendiado',
  icon: { type: 'html-entity', value: '🔥' },
  description: md`
    Estado adquirido quando seu personagem fica em contato com o fogo
    por muito tempo, algumas magias podem causar esse efeito simplesmente
    pelo contato.
    ---
    O efeito se desfaz com o tempo e podem ser usados elixires para cortar
    o efeito mais rápido. Em combate isso é contado por turnos, a cada
    turno se recebe dano extra de [fogo]:orange até o efeito passar.
  `
}
