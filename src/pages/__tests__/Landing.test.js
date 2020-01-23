import React from 'react'
import { render } from '@testing-library/react'
import Landing from '../Landing'

describe('Landing', () => {
  it('displays the same content every time it renders', () => {
    const snapshot = render(<Landing />)
    expect(snapshot).toMatchSnapshot()
  })
})
