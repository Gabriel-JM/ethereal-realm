import { Proficiency } from '../../src/types'
import { join } from '../utils'

export const proficiencies = <Proficiency[]> [
  {
    id: 'prof_acro',
    name: 'Acrobacia',
    atribute: 'dexterity',
    category: 'moviment',
    description: join(
      'Capacidade de fazer movimentos físicos mais específicos,',
      'como um mortal, uma estrela, uma cambalhota, etc...',
      'Capacidade de atravessar obstáculos de maneira ágil,',
      'de se esgueirar, deslizar e afins… Não se aplica a',
      'movimentos de esquiva em combate.'
    )
  },
  {
    id: 'prof_agil',
    name: 'Agilidade',
    atribute: 'dexterity',
    category: 'combat',
    description: join(
      'Perícia relacionada a velocidade de reação do personagem,',
      'em combate essa perícia aumenta o valor da jogada de',
      'esquiva, mas não afeta as jogadas de bloqueio com escudo ou armas.'
    )
  },
  {
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
  },
  {
    id: 'prof_arc',
    name: 'Arcanismo',
    atribute: 'intelligence',
    category: 'conjuration',
    description: join(
      'Perícia relacionada ao conhecimento sobre o arcano, suas energias,',
      'magias do domínio arcano. Afeta a eficácia e eficiência das magias',
      'arcanas conjuradas por você.'
    )
  },
  {
    id: 'prof_atle',
    name: 'Atletismo',
    atribute: 'strength',
    category: 'moviment',
    description: join(
      'Relacionada a capacidade de fazer movimentos com o corpo, como por',
      'exemplo, pulos, subir em uma corda, nadar, etc... Não se aplica a',
      'movimentos de esquiva em combate.'
    )
  },
  {
    id: 'prof_ccc',
    name: 'Combate Corpo a Corpo',
    atribute: 'dexterity',
    category: 'combat',
    description: join(
      'Perícia com armas corpo a corpo, sejam leves ou pesadas. Aumenta',
      'a chance de acerto de ataques com essas armas, ou seja, bonus na',
      'jogada de ataque.'
    )
  },
  {
    id: 'prof_cdef',
    name: 'Combate Defensivo',
    atribute: 'dexterity',
    category: 'combat',
    description: join(
      'Perícia relacionada a reflexos de bloqueio de golpes com escudo',
      'ou armas. Aumenta o valor das jogadas de bloqueio com escudos e armas.'
    )
  },
  {
    id: 'prof_cdis',
    name: 'Combate a Distância',
    atribute: 'dexterity',
    category: 'combat',
    description: join(
      'Perícia com armas focadas em ataque a distância, inclusive para armas',
      'que podem ser arremessadas. Aumenta a chance de acerto de ataques com',
      'essas armas, ou seja, bonus na jogada de ataque.'
    )
  },
  {
    id: 'prof_furt',
    name: 'Furtividade',
    atribute: 'dexterity',
    category: 'moviment',
    description: 'Capacidade de realizar ações de maneira silenciosa e despercebida.'
  },
  {
    id: 'prof_intu',
    name: 'Intuição',
    atribute: 'wisdom',
    category: 'ability',
    description: join(
      'Determina o quão boa é sua intuição em determinada situação, ao decidir',
      'algo, ao falar com alguém, ao tentar seguir a sorte.'
    )
  },
  {
    id: 'prof_hist',
    name: 'História',
    atribute: 'wisdom',
    category: 'knowledge',
    description: join(
      'Relacionado a conhecimentos históricos e a qualquer coisa que possa',
      'envolver esse tipo de conhecimento.'
    )
  },
  {
    id: 'prof_invs',
    name: 'Investigação',
    atribute: 'intelligence',
    category: 'ability',
    description: join(
      'Determina o quão boa é sua capacidade de investigar/procurar por',
      'algo ou alguém, e perceber detalhes em algo.'
    )
  },
  {
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
  },
  {
    id: 'prof_musi',
    name: 'Musicismo',
    atribute: 'charisma',
    category: 'conjuration',
    description: join(
      'Perícia relacionada ao conhecimento sobre música, sobre como trabalhar',
      'com a harmonia entre os sons, o ritmo, a melodia, a voz. E sobre como',
      'todos esses elementos impactam e conseguem conjurar os mais diversos',
      'efeitos mágicos, no geral afeta a eficácia e eficiência dos seus',
      'efeitos sonoros que manipulam a energia arcana.'
    )
  },
  {
    id: 'prof_pcep',
    name: 'Percepção',
    atribute: 'wisdom',
    category: 'ability',
    description: join(
      'Relacionado ao quão bons são seus reflexos e atenção para perceber',
      'alguns detalhes ou o quão você está atento em certas situações.'
    )
  },
  {
    id: 'prof_pers',
    name: 'Persuasão',
    atribute: 'charisma',
    category: 'social',
    description: join(
      'Capacidade convencer, apoiar, falar em público e/ou argumentar',
      'com outras pessoas.'
    )
  },
  {
    id: 'prof_pdig',
    name: 'Prestidigitação',
    atribute: 'dexterity',
    category: 'ability',
    description: join(
      'Capacidade de realizar ações que precisam de alta delicadeza,',
      'rapidez, precisão, minuciosidade e/ou agilidade.'
    )
  },
  {
    id: 'prof_reli',
    name: 'Religião',
    atribute: 'wisdom',
    category: 'conjuration',
    description: join(
      'Está relacionada a todo o conhecimento que você possuí sobre',
      'religião e afins, não necessariamente determina que você possui',
      'algum vínculo religiosos ou que é devoto a algo, mas afeta as',
      'suas magias de domínio divino.'
    )
  },
  {
    id: 'prof_sobr',
    name: 'Sobrevivência',
    atribute: 'wisdom',
    category: 'knowledge',
    description: join(
      'Conhecimento sobre como sobreviver a situações complicadas,',
      'em questão de perigo, escassez de recursos e táticas de sobrevivência.'
    )
  },
  {
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
  }
]
