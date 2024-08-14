import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const congelado: AdverseStatus = {
  id: 'adst_yaqt6G3qQA',
  name: 'Congelado',
  icon: { type: 'html-entity', value: '🧊' },
  description: md`
    Estado adquirido quando seu personagem fica em contato com frio
    intenso por muito tempo, algumas magias podem causar esse efeito
    simplesmente pelo contato.
    <br/>
    Quando um personagem está congelado ele não pode se mover, porém
    não é como se tivesse criado um bloco de gelo que o encobre, seu
    corpo fica completamente coberto pelo gelo e por consequência imóvel.
    ---
    O efeito se desfaz com o tempo, se for causado por magia, se for
    natural é necessário se aquecer, não existem elixires conhecidos
    que removam esse efeito, principalmente pelo fato de que ao estar
    congelado o personagem não consegue beber. Contudo, existem óleos
    e gases que podem remover esse efeito mais rapidamente, porém são
    soluções bem raras.
    <br/>
    Em combate se perde o turno quando está congelado, enquanto o efeito
    durar se recebe dano crítico de novos ataques com dano de [gelo]:blue
    ou de [impacto]:yellow.
    <br/>
    Se o alvo atingido estiver com concentração ativa, ela se perde
    instantaneamente.
  `
}
