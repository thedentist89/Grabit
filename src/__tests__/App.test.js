import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    window.URL.createObjectURL = jest.fn()
    render(<App />)
  })
})
