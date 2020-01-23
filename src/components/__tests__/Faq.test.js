import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Faq from '../Faq'

Enzyme.configure({ adapter: new Adapter() })

describe('Faq', () => {
  it('renders without crashing', () => {
    shallow(<Faq />)
  })

  it('displays the same content every time it renders', () => {
    const snapshot = Faq
    expect(snapshot).toMatchSnapshot()
  })
})
