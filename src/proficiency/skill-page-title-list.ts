import { css, html } from 'lithen-fns'

const skillPageTitleStyles = css`
  &.skills-title-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 14px 16px;
  }

  .skill-title {
    width: 100%;
    max-width: 420px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: var(--black-70);
    box-shadow: 0 2px 3px var(--black-80);
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

export type SkillPageTitleListProps = {
  onClick?(skillId: string): void
}

export function skillPageTitleList({ onClick }: SkillPageTitleListProps) {
  const skillsTitles = {
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
    <ul css=${skillPageTitleStyles} class="skills-title-list">
      ${Object
          .entries(skillsTitles)
          .map(([target, title]) => {
            return skillPageTitle({
              title,
              skillId: target,
              onClick: onClick
            })
          })
      }
    </ul>
  `
}

export type SkillPageTitleProps = {
  title: string
  skillId: string
  onClick?(id: string): void
}

export function skillPageTitle({ title, skillId, onClick }: SkillPageTitleProps) {
  return html`
    <li class="skill-title" on-click=${onClick && (() => onClick(skillId))}>
      <img src="/images/${skillId}.png" width="30" />
      <span>${title}</span>
    </li>
  `
}
