import { PageInfo } from '../../src/types'
import { md } from '../utils'
import { intuicao, investigacao, percepcao, prestidigtacao } from './ability'
import { agilidade, combateADistancia, combateCorpoACorpo, combateDefensivo } from './combat'
import { arcanismo, musicismo, religiao } from './conjuration'
import { alquimia, historia, medicina, sobrevivencia, tratarAnimais } from './knowledge'
import { acrobacia, atletismo, furtividade } from './moviment'
import { persuasao } from './social'

export const proficiencies = <const> [
  acrobacia,
  agilidade,
  alquimia,
  arcanismo,
  atletismo,
  combateCorpoACorpo,
  combateDefensivo,
  combateADistancia,
  furtividade,
  historia,
  intuicao,
  investigacao,
  medicina,
  musicismo,
  percepcao,
  persuasao,
  prestidigtacao,
  religiao,
  sobrevivencia,
  tratarAnimais
]

export const proficienciesPageInfo = <PageInfo> {
  description: md`
    Perícias são representações das capacidades de um
    personagem em determinadas ações, elas são normalmente
    vinculadas a algum atributo sendo um bonus para ele
    para determinadas situações. Essas perícias podem ser
    separadas em categorias como [**combate**]:red,
    [**movimentação**]:green, [**conjuração**]:blue,
    [**conhecimento**]:yellow, [**aptidão**]:brown e
    [**social**]:purple.
  `,
  content: proficiencies
}

console.log(proficienciesPageInfo.description)
