import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const envenenamento: AdverseStatus = {
  id: 'adst_vSr5aQ6rfD',
  name: 'Envenenamento',
  icon: { type: 'html-entity', value: '🧪' },
  description: md`
    Estado adquirido de maneira física e/ou mágica.
    <br/>
    O envenenamento afeta todo seu corpo o deixando levemente
    prejudicado e sendo danificado aos poucos com o tempo.
    ---
    Quando o personagem está envenenado ele sofre um dano
    adicional ao inicio de cada turno até o efeito ser curado
    ou passar. Elixires podem curar ou encurtar o tempo dos efeitos.
  `
}
