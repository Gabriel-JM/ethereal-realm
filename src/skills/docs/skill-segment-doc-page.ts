import { commonLayout } from '../../common/layouts'
import { nav, router } from '../../config'
import { skillSegment } from '..'
import { SkillSegmentsIds } from '../../types'
import { isDataReady } from '../../data/init-data'
import { html, shell } from 'lithen-fns'

export function skillSegmentDocPage() {
  const segmentId = router.params?.get('skillId')
  
  return commonLayout(
    html(
      [''], 
      shell(() => {
        return !isDataReady.get()
        ? new Text('Loading...')
        : skillSegment({
          skillSegmentId: segmentId as SkillSegmentsIds,
          variant: 'docs',
          onClickBack: nav('/')
        })
      })
    )
  )
}
