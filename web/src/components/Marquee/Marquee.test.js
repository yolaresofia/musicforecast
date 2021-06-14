import { render, cleanup } from '@testing-library/react'

import Marquee from './Marquee'

describe('Marquee', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Marquee />)
    }).not.toThrow()
  })
})
