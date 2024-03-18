import { Skill } from '../../../../src/types'
import { join, textBenefit, textBenefitList } from '../../../utils'

export const divineDomain1 = <Skill> {
  id: 'cltr_31Jzlp1SnO',
  title: 'Domínio Divino 1',
  type: 'passive',
  properties: {
    requirements: 'Um Símbolo Divino'
  },
  description: join(
    'Você precisa de um símbolo sagrado, um objeto',
    'que foi abençoado por um Alto Sacerdote referente',
    'ao teu deus, esse objeto representa sua ligação',
    'divina de devoto e através dele seu deus te garante',
    'parte dos poderes dele. Você pode escolher um',
    'domínio divino relacionado a sua divindade. Cada',
    'domínio te garante um tipo de bênção relacionada',
    'ou acesso a alguma magia desse domínio divino. A',
    'classe de dificuldade das magias recebidas pelos',
    'deuses pode ser substituído por (Sabedoria + Religião do Usuário).'
  ),
  benefits: {
    type: 'list',
    value: [
      textBenefit('Acesso a 2 magias do grimório de nível 1 de domínio clerical'),
      {
        type: 'list',
        title: 'Benefício de sua divindade',
        value: textBenefitList(
          '<strong>Enganação:</strong> Magia: Enfeitiçar Pessoa.',
          '<strong>Tempestade:</strong> Magia: Descarga Elétrica,'+
            ' Onda de Força ou Rajada de Ventos.',
          '<strong>Sabedoria:</strong> Magia: Mensagem ou Marca Arcana.',
          '<strong>Luz:</strong> Magia: Disparo de Fogo ou Globos de Luz.',
          '<strong>Guerra:</strong>Bônus: +1 Jogada de Ataque com Arma'+
            ' ou Magia: Proteção contra Lâminas.',
          '<strong>Vida:</strong>Magia: Fechar Ferimentos.',
          '<strong>Natureza:</strong>Magia: Chicote de Espinhos, Rajada'+
            ' de Ventos ou Amizade Animal.'
        )
      }
    ]
  }
}
