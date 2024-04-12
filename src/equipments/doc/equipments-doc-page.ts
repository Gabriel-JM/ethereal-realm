import { html } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { docHeader } from '../../common'
import { weaponsDocPage } from '../weapons'

export function equipmentsDocPage() {
  return commonLayout(html`
    ${docHeader({ title: '🛡 Equipamentos' })}

    ${weaponsDocPage()}
  `)
}
