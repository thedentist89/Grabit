import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })

  it('displays the same content every time it renders', () => {
    const snapshot = render(<Footer />)
    expect(snapshot).toMatchSnapshot()
  })
})
