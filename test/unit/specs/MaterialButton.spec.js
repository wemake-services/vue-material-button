import MaterialButton from 'components/MaterialButton'
import { getComponent } from '../utils'

describe('MaterialButton.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialButton, {})
  })

  // Computed classes

  it('rendes correct default classes', () => {
    expect(component.computedClasses).to.deep.equal({
      'material-button--raised': false,
      'material-button--disabled': false,
      'material-button--active': true
    })
  })

  it('renders correct full classes', () => {
    const inst = getComponent(MaterialButton, {
      raised: true,
      disabled: true
    })

    expect(inst.computedClasses).to.deep.equal({
      'material-button--raised': true,
      'material-button--disabled': true,
      'material-button--active': false
    })
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
