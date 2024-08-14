import { AdverseStatus, PageInfo } from '../../src/types'
import { amaldiçoado } from './amaldiçoado'
import { choqueEletrico } from './choque-elétrico'
import { congelado } from './congelado'
import { derrubado } from './derrubado'
import { envenenamento } from './envenenamento'
import { exaustão } from './exaustão'
import { incendiado } from './incendiado'
import { molhado } from './molhado'
import { petrificado } from './petrificado'
import { resfriado } from './resfriado'
import { sangramento } from './sangramento'

export const AdverseStatusPageInfo: PageInfo<AdverseStatus[]> = {
  content: [
    exaustão,
    incendiado,
    molhado,
    choqueEletrico,
    resfriado,
    congelado,
    petrificado,
    derrubado,
    envenenamento,
    amaldiçoado,
    sangramento
  ]
}
