import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const kitManutençãoArmas = <CommonItem> {
  id: 'coit_kV21nV5RMC',
  name: 'Kit de Manutenção de Armas',
  icon: htmlEntity('HammerPick'),
  cost: '$12 e 10 Minutos.',
  description: md`
    Um kit simples que contém vários utensílios como
    panos, lixas, pedras de amolar, entre outros itens
    úteis pra fazer limpeza e reajuste de armas. Este
    item deve ser usados no **Tempo Livre** ou **Repousos**.
    O kit aplica **Vantagem de Dano** na arma que foi
    usado, durante o **próximo combate inteiro**, o kit
    pode ser utilizado até **3 vezes**, cada arma utilizada
    com o kit consome um uso.
  `
}
