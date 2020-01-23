import React from 'react'
import { render } from '@testing-library/react'
import Profile from '../Profile'

describe('Profile', () => {
  it('renders without crashing', () => {
    render(<Profile />)
  })

  it('displays the same content every time it renders', () => {
    const snapshot = render(<Profile />)
    expect(snapshot).toMatchSnapshot()
  })
})
