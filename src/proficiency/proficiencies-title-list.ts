import { css, html } from 'lithen-fns'
import { proficiencyInDisplay } from '.'

const proficienciesTitleStyles = css`
  &.proficiencies-title-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .proficiency-title {
    width: 49%;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: var(--black-75);
    transition: all 150ms;

    &:hover {
      background-color: var(--black-80);
    }
    
    & span {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`

export function proficienciesTitleList() {
  const proficiencyTitles = {
    'combat-techniques': 'Técnicas de Combate',
    'hunt-tactics': 'Táticas de Caça (Beta)',
    'arcane-traditions': 'Tradições Arcanas',
    'clerical-traditions': 'Tradições Clericais',
    'cunning-techniques': 'Técnicas Ardilosas',
    'merchant-tactics': 'Táticas de Mercante',
    'alchemy-practices': 'Práticas da Alquimia',
    'runic-practices': 'Práticas Rúnicas (Beta)',
    'musical-practices': 'Práticas Musicais (Beta)'
  }

  return html`
    <ul css=${proficienciesTitleStyles} class="proficiencies-title-list">
      ${Object
          .entries(proficiencyTitles)
          .map(([target, title]) => {
            return proficiencyTitle(title, target)
          })
      }
    </ul>
  `
}

export function proficiencyTitle(title: string, target: string) {
  const handleClick = () => proficiencyInDisplay.set(target)

  return html`
    <li class="proficiency-title" on-click=${handleClick}>
      <img src="/images/${target}.png" width="30" />
      <span>${title}</span>
    </li>
  `
}
