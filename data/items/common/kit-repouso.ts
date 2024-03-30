import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const kitRepouso = <CommonItem> {
  id: 'coit_sOUsaEBfdM',
  name: 'Kit de Repouso',
  icon: htmlEntity('BentoBox'),
  cost: '$8.',
  description: md`
    Esse kit possuí **uso único**. Um conjunto de itens
    para realizar uma breve pausa na jornada, ele é
    composto de: pacotes com vários alimentos desidratados
    adequados a viagens. Pequenas madeiras capazes de fazer
    uma fogueira pequena e simples. Alguns panos finos que
    podem ser usados para deitar ou sentar encima.
    
    <br/><br/>

    Somente um kit é necessário para realizar um descanso
    curto para todos os personagens, cada personagem pode
    usar seu tempo de descanso como bem quiser mas deve
    realizar ações que encaixem no tempo utilizado no
    repouso, cada repouso pode ser de **no máximo 2 horas
    e 30 minutos**.
    
    <br/><br/>

    Cada personagem pode ter habilidades especiais que
    podem ser usadas durante o repouso, porém todos podem
    usar a ação de **Alimentar-se**, que recupera 1D6 +
    Constituição + Medicina de [PV]:green e 1D6 + 2 de
    [PE]:blue, e que **gasta 30 minutos** do descanso e
    só pode ser utilizada uma **única vez por Kit**.
  `
}
