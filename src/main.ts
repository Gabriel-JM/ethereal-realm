import './styles.css'
import { initData } from './data/init-data'
import { router } from './config'

initData()

const app = document.getElementById('app')

function render() {
  const match = router.matchRoute()

  app?.replaceChildren(match.value())
}

router.onNavigate(render)

window.onload = render
