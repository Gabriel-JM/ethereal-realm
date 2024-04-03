import { html, raw, shell } from 'lithen-fns'
import { isDataReady } from '../../../data/init-data'
import { dataStore } from '../../../data/stores'

export function weaponsDocPage() {
  return html`
    <div class="weapons-doc-page">
      ${shell(() => {
        const dataIsLoaded = isDataReady.get()

        if (!dataIsLoaded) {
          return new Text('Loading...')
        }

        const { description, content } = dataStore.items.weapons

        return html`
          <div class="doc-description">
            <h3>Armas</h3>

            <p>${raw(description!)}</p>
          </div>

          <section class="doc-content">
            ${content.map(props => {
              return html`
                <div>
                  <div>
                    <div>
                      <h4>${props.name}</h4>
                      <p>${props.rarity}</p>
                    </div>
                    <div>
                      <img alt="🗡️" />
                    </div>
                  </div>
                  <div>
                    <p>Dano</p>
                    ${props.damage.map(dmg => {
                      return html`
                        <p>${dmg.value} (${dmg.types.join(', ')})</p>
                      `
                    })}
                  </div>
                  <div>
                    <p>Atributos</p>
                    <p>${props.attributes.join(', ')}</p>
                  </div>
                  <div>
                    <p>Modificador de Iniciativa</p>
                    <p>
                      ${props.initiativeModifier > 0
                        ? `+${props.initiativeModifier}`
                        : props.initiativeModifier.toString()
                      }
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>Distância</p>
                      <p>${props.distance ?? '-'}</p>
                    </div>
                    <div>
                      <p>Preço</p>
                      <p>${props.price}</p>
                    </div>
                  </div>
                  <div>
                    <p>Descrição</p>
                    <p>${props.description}</p>
                  </div>
                </div>
              `
            })}
          </section>
        `
      })}
    </div>
  `
}
