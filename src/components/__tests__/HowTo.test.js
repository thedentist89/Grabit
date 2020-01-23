import React from 'react'
import { render } from '@testing-library/react'
import HowTo from '../HowTo'

describe('HowTo', () => {
  it('renders without crashing', () => {
    render(<HowTo />)
  })

  it('displays the same content every time it renders', () => {
    const snapshot = render(<HowTo />)
    expect(snapshot).toMatchSnapshot()
  })
})
