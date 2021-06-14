import { render, cleanup } from '@testing-library/react'

import MusicForecastPage from './MusicForecastPage'

describe('MusicForecastPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<MusicForecastPage />)
    }).not.toThrow()
  })
})
