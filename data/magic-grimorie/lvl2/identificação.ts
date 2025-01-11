import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const identificação: Spell = {
  id: 'spll_4VAK6C7rsS',
  name: 'Identificação',
  cover: supabaseStorageURL + 'identificacao.webp',
  concentration: false,
  domains: ['arcane'],
  energyCost: 1,
  effect: 'Identifica efeitos mágicos.',
  savingThrow: '2D6 + Habilidade de Conjuração contra CD 10.',
  conjurationTime: '5 Minutos',
  description: md`
    Durante 5 minutos, você consegue descobrir quais efeitos
    mágicos estão afetando um item que você possa tocar ou uma
    criatura. Magias como **Aura Indetectável** causam que se é
    detectado que algo está coberto por essa magia, mas não é
    possível descobrir quais efeitos a aura está encobrindo.
    Se não for uma magia já conhecida, você só é capaz de saber
    que não a conhece.

    Ao identificar uma possível conjuração de **Disfarçar-se**, você
    deve ser bem sucedido em teste de 2D6 + Inteligencia + Arcanismo
    contra 2D6 + Inteligencia + Arcanismo de quem está supostamente
    disfarçado, esse teste substitui o teste de sucesso da magia.

    A magia se **desfaz** se **falhar** no teste.
  `
}
