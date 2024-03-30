import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const grimorioBranco = <CommonItem> {
  id: 'coit_1iScBBoKln',
  name: 'Grimório em Branco',
  icon: htmlEntity('NotebookBrown'),
  cost: '$15.',
  description: md`
    Um pequeno livro magicamente preparado para ser
    usado como um repositório de feitiços. Ele é
    adquirido em branco e deve ser realizado um
    simples ritual de vinculo com o usuário para que
    ele tenha o efeito desejado, senão será apenas
    um livro comum.
  `
}
