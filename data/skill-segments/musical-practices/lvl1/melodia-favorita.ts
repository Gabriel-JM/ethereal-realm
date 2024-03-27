import { Skill } from '../../../../src/types'
import { detailsList, md } from '../../../utils'

export const melodiaFavorita = <Skill> {
  id: 'mupr_kC8rLsEwC3',
  title: 'Melodia Favorita (Car)',
  type: 'passive',
  description: md`
    Graças a forma como cada instrumento permite a manipulação
    da magia ser diferente existem efeitos que são mais simples
    ou mais poderosos com tipos específicos de instrumentos.
    Escolha uma das especializações:

    ${detailsList('Especializações', [
      `#### Cordofones
        Instrumentos de corda que permitem melhor manipulação de
        efeitos curativos. Garante +1 nos testes de magias
        específicas para cura e +2 no valor da cura de qualquer
        magia que cure PV.
      `,
      `#### Aerofones
        Instrumentos de sopro que permitem uma melhor manipulação
        do ar e visão. Garante +1 nos testes de magias que envolvem
        ilusões, manipulações, e/ou projeções, além de +2 de dano
        de vento.
      `,
      `#### Membranofones e Idiofones
        Instrumentos de membrana, atrito, agitação e percussão que
        permitem melhor manipulação de ondas, trajetos e colisão de
        forças. Garante +2 no dano absorvido por magias de barreiras
        e proteções, além de +2 no dano de impacto provido por ondas
        e vibrações.
      `
    ])}
  `
}
