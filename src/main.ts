import './styles.css'
import { proficiencyCalculator } from './proficiency'
import { initData } from './data/init-data'

initData()

document.getElementById('app')?.append(proficiencyCalculator())
