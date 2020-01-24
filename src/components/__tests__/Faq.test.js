import React from 'react'
import { render } from '@testing-library/react'
import Faq from '../Faq'

describe('Faq', () => {
  it('renders without crashing', () => {
    render(<Faq />)
  })

  it('displays the same content every time it renders', () => {
    const snapshot = render(<Faq />)
    expect(snapshot).toMatchSnapshot()
  })
})
