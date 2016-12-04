import MaterialButton from 'components/MaterialButton'
import { getComponent } from '../utils'

describe('MaterialButton.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialButton, {})
  })

  // Computed classes

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

  // Events

  it('emits click event', () => {
    let test = null
    const passed = true

    component.$on('click', () => {
      test = passed
    })

    component.handleClick()

    expect(test).to.equal(passed)
  })
})
