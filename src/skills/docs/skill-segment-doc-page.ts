import { commonLayout } from '../../common/layouts'
import { nav, router } from '../../config'
import { skillSegment } from '..'
import { SkillSegmentsIds } from '../../types'
import { html } from 'lithen-fns'
import { whenDataIsReady } from '@/common/utils'

export function skillSegmentDocPage() {
  const segmentId = router.params?.get('skillId')
  
  return commonLayout(
    html(
      [''], 
      whenDataIsReady(() => skillSegment({
        skillSegmentId: segmentId as SkillSegmentsIds,
        variant: 'docs',
        onClickBack: nav('/')
      }))
    )
  )
}
