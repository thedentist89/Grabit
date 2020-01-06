import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('displays "hello world"', () => {
    const mountedApp = shallow(<App />)
    const header = mountedApp.find('h1')
    expect(header.text()).toBe('Hello, World')
  })
})
