import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const exaustão: AdverseStatus = {
  id: 'adst_p8etKAclzd',
  name: 'Exaustão',
  icon: { type: 'html-entity', value: '😮‍💨' },
  description: md`
    Estado adquirido por passar um certo tempo sem comer, beber e descansar.
    Principalmente descansar.
    ---
    Nível 1: desvantagem de -3 em todos os testes envolvendo atributos e perícias.

    Nível 2: pontos de vida máximos, reduzidos pela metade temporariamente.

    Nível 3: a cada 10 minutos deve se fazer um teste de **Con CD 8**, caso falhe
    o personagem desmaia. Somente outro personagem pode salva-lo em uma situação assim.
  `
}
