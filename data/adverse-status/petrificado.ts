import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const petrificado: AdverseStatus = {
  id: 'adst_3MAbBIYfxR',
  name: 'Petrificado',
  icon: { type: 'html-entity', value: '🪨' },
  description: md`
    Estado adquirido magicamente.
    <br/>
    A petrificação pode ser completa ou parcial, quando petrificado
    o local fica imóvel com uma camada fina, porém resistente, de
    pedra sobe o local.
    ---
    O efeito se desfaz com um teste de constituição no local afetado,
    caso seja no corpo todo e falhe no teste de constituição o efeito
    dura por mais 4 horas até se desfazer. Esse efeito pode ser reduzido
    com óleos e elixires.
    <br/>
    Em combate você deve realizar um teste de constituição CD 6 todo
    turno até obter sucesso, caso falhe a petrificação se propaga, caso
    ainda não esteja no corpo todo, aumentando o CD em + 1. A petrificação
    te impede de fazer ações que precisem daquela parte do corpo que
    esteja petrificada.
  `
}
