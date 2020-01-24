import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from '../Landing'

describe('Landing', () => {
  it('displays the same content every time it renders', () => {
    const snapshot = render(
      <Router>
        <Landing />
      </Router>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
