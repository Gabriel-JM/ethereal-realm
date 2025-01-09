import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const maoFantasma: Spell = {
  id: 'spll_sHtJlm9V7v',
  name: 'Mão Fantasma',
  cover: supabaseStorageURL + 'mao-fantasma.webp',
  concentration: true,
  domains: ['arcane'],
  energyCost: 4,
  effect: 'Dano Sombrio: 2D6+5.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  duration: 'Até 2 turnos.',
  description: md`
    Você cria uma mão esquelética fantasmagórica, que pode se
    estender até o alvo em um alcance de até 3 metros.

    Se atingir, a criatura sofre dano, não podendo recurar vida
    enquanto presa enquanto o efeito durar.

    A cada turno do inimigo ele pode realizar um teste de **2D6 + Força
    + Constituição** contra sua **CD de 4 + Habilidade de Conjuração** para se soltar.

    Você pode prender um alvo por 2 turnos.
  `
}
