import MaterialButton from 'components/MaterialButton'
import {getComponent} from '../utils'

describe('MaterialButton.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialButton, {})
  })

  it('rendes correct default classes', () => {
    expect(component.$el.querySelector('button').className)
      .to.equal('material-button')
  })

  it('renders correct full classes', () => {
    const inst = getComponent(MaterialButton, {
      raised: true,
      large: true
    })
    const button = inst.$el.querySelector('button')

    expect(button.className).to.equal(
      'material-button material-button--raised material-button--large')
  })
})
