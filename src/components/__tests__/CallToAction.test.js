import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import CallToAction from '../CallToAction'

describe('CallToAction', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <CallToAction />
      </Router>
    )
  })

  it('it opens a modal when the "Get Started" button is clicked', async () => {
    const { container } = render(
      <Router>
        <CallToAction />
      </Router>
    )
    const button = container.querySelector('.button__invert')
    const modal = container.querySelector('.my-modal')

    fireEvent.click(button)

    expect(modal.classList.contains('open')).toBe(true)
  })
})
