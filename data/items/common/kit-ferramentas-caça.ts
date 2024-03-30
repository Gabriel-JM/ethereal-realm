import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const kitFerramentasCaça = <CommonItem> {
  id: 'coit_zm24PgCair',
  name: 'Kit de Ferramentas de Caça',
  icon: htmlEntity('Toolbox'),
  cost: '$20.',
  description: md`
    Um kit que contem várias ferramentas que são utilizadas
    junto de **peças** para se criar vários tipos de itens,
    normalmente utilizados por caçadores. Este kit comporta
    um máximo de 100 peças.
    <br/>
    As **Peças** são de uma construção muito específica,
    então a maneira mais comum de se conseguir peças é
    comprando elas ou encontrando de inimigos que talvez
    as tinham.
  `
}
