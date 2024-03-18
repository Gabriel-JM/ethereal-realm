import { join } from '.'
import { SkillBenefit } from '../../src/types'

export function textBenefit(...text: string[]) {
  return <SkillBenefit> {
    type: 'text',
    value: join(...text)
  }
}

export function textBenefitList(...texts: string[]) {
  return texts.map(text => textBenefit(text))
}
