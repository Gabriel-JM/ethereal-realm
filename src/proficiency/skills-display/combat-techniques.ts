import { css, html } from 'lithen-fns'
import { backButton } from '../../common/buttons'
import { proficiencyInDisplay } from '..'

// const skillLine = {
//   id: 'combat-tecniques',
//   title: 'Técnicas de Combate',
//   levels: [
//     {
//       requeriments: 'Nível de Personagem 1',
//       skills: [
//         {
//           title: 'Escudeiro',
//           type: 'passive' as const,
//           description: [
//             'Sua experiencia como escudeiro te garantiu alguns diversos conhecimentos',
//             ' e com isso as seguintes perícias:'
//           ].join(),
//           proficiencies: [
//             {
//               name: 'História',
//               value: 1
//             },
//             {
//               name: 'Atletismo',
//               value: 1
//             },
//             {
//               name: 'Percepção',
//               value: 1
//             },
//             {
//               name: 'Combate Corpo a Corpo',
//               value: 1
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

const skillData = {
  title: 'Escudeiro',
  type: 'passive' as const,
  description: [
    'Sua experiencia como escudeiro te garantiu alguns diversos conhecimentos',
    ' e com isso as seguintes perícias:'
  ].join(),
  proficiencies: [
    {
      name: 'História',
      value: 1
    },
    {
      name: 'Atletismo',
      value: 1
    },
    {
      name: 'Percepção',
      value: 1
    },
    {
      name: 'Combate Corpo a Corpo',
      value: 1
    }
  ]
}

export function combatTechniques() {
  return html`
    ${skillsDisplayTitle('Técnicas de Combate', 'combat-techniques')}

    <h4>Nível 1</h4>
    ${skillCard(skillData)}
  `
}

const skillsDisplayTitleStyles = css`
  & {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: 20px;
  }
`

export function skillsDisplayTitle(title: string, image: string) {
  return html`
    <header css=${skillsDisplayTitleStyles}>
      <div>
        ${backButton({
          onClick: () => proficiencyInDisplay.set('title-list')
        })}
      </div>

      <div class="title">
        <img src="/images/${image}.png" width="40" />
        <h3>${title}</h3>
      </div>
    </header>
  `
}

type SkillCardProps = {
  title: string
  type: 'passive' | 'active' | 'rest'
  description: string,
  proficiencies?: Array<{
    name: string
    value: number
  }>
}

export function skillCard(data: SkillCardProps) {
  return html`
    <div class="skill-card">
      <h4 class="title">${data.title}</h4>
      <p class="type ${data.type}">Passiva</p>
      <p class="description">
        ${data.description}
      </p>

      ${data.proficiencies && html`
        <details>
          <summary>Perícias</summary>
          <ul>
            ${data.proficiencies.map(proficiency => {
              return html`
                <li>- ${proficiency.name} ${proficiency.value}</li>
              `
            })}
          </ul>
        </details>
      `}
    </div>
  `
}
