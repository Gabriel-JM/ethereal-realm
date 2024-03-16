import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const alquimia = <const> {
  id: 'prof_alq',
  name: 'Alquimia',
  atribute: 'intelligence',
  category: 'knowledge',
  description: join(
    'Perícia relacionada ao conhecimento e experiência com diversos',
    'materiais alquímicos, seus efeitos benéficos e adversos. Um',
    'conhecimento que ajuda a deduzir coisas materiais naturais que',
    'você não conheça Afeta na potência de alguns itens alquímicos',
    'efeitos por você.'
  )
} satisfies Proficiency

export const historia = <const> {
  id: 'prof_hist',
  name: 'História',
  atribute: 'wisdom',
  category: 'knowledge',
  description: join(
    'Relacionado a conhecimentos históricos e a qualquer coisa que possa',
    'envolver esse tipo de conhecimento.'
  )
} satisfies Proficiency

export const medicina = <const> {
  id: 'prof_med',
  name: 'Medicina',
  atribute: 'wisdom',
  category: 'knowledge',
  description: join(
    'Relacionado a conhecimentos sobre medicina no geral, ajudando a',
    'dar diagnósticos ou a saber como tratar melhor pessoas em diferentes',
    'estados. Se você estiver próximo a um aliado caído, você pode',
    'ajudá-lo nos testes contra a morte, adicionando seu valor de medicina',
    'as jogadas dele. Essa perícia também pode afetar a potência da maioria',
    'dos itens de cura fabricados.'
  )
} satisfies Proficiency

export const sobrevivencia = <const> {
  id: 'prof_sobr',
  name: 'Sobrevivência',
  atribute: 'wisdom',
  category: 'knowledge',
  description: join(
    'Conhecimento sobre como sobreviver a situações complicadas,',
    'em questão de perigo, escassez de recursos e táticas de sobrevivência.'
  )
} satisfies Proficiency

export const tratarAnimais = <const> {
  id: 'prof_tani',
  name: 'Tratar Animais',
  atribute: 'wisdom',
  category: 'knowledge',
  description: join(
    'Conhecimentos de como a maioria dos animais são, como',
    'vivem, como se aproximar, cuidar, tratar, ou até mesmo',
    'de como engana-los. Determina também a sua afinidade',
    'espiritual com animais, principalmente animais companheiros.'
  )
} satisfies Proficiency
