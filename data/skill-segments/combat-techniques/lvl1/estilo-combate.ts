import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const estiloCombate = <Skill> {
  id: 'cote_VDJOHH9ha3',
  title: 'Estilo de Combate (For, Des)',
  type: 'passive',
  description: 'Você adota um estilo de combate particular que será sua especialidade.',
  benefits: {
    type: 'list',
    title: 'Escolha um dentre:',
    value: [
      {
        type: 'text',
        value: join(
          '<h3>Arquearia (Des)</h3>',
          '<p>Você adiciona +1 de bônus nas jogadas',
          'de ataque com arcos e bestas e a perícia',
          '<strong>Combate a Distância 1</strong>.</p>'
        )
      },
      {
        type: 'text',
        value: join(
          '<h3>Combate com armas pesadas (For)</h3>',
          '<p>Quando você rolar um 1 ou um 2 num dado',
          'de dano de um ataque com arma corpo-a-corpo',
          'que você esteja empunhando com duas mãos,',
          'você pode rolar o dado novamente e deverá',
          'usar a nova rolagem, mesmo que resulte em',
          '1 ou 2. A arma deve ter a propriedade',
          '<strong>duas mãos</strong> para ganhar esse benefício.</p>'
        )
      },
      {
        type: 'text',
        value: join(
          '<h3>Combate com duas armas (Des)</h3>',
          '<p>Quando estiver usando armas em ambas as mãos',
          '(requer <strong>Guerreiro ambidestro</strong>)',
          'você poderá usar as duas armas para bloquear',
          'ataques corpo-a-corpo contra você que não sejam',
          'de armas com o atributo <strong>pesada</strong>.',
          'A redução de dano do bloqueio é o maior bônus de',
          'dano entre as duas armas + Força.</p>'
        )
      },
      {
        type: 'text',
        value: join(
          '<h3>Duelista (Des)</h3>',
          '<p>Quando estiver utilizando uma arma em somente',
          'uma mão, e mais nada na outra você recebe um bônus',
          'de +1 nas jogadas de ataque com esta arma.</p>'
        )
      },
      {
        type: 'text',
        value: join(
          '<h3>Defensor (For)</h3>',
          '<p>Ao realizar uma ação de defesa você pode adicionar',
          '+2 o seu valor de força na soma do dano reduzido',
          'pelo escudo ou pela arma se ela possuir a propriedade',
          '<strong>resistente</strong>, além da perícia',
          '<strong>Combate Defensivo 1</strong>.</p>'
        )
      }
    ]
  }
}
