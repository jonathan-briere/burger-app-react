import React from 'react'
import BurgerBot from '../burger/BurgerBot'
import BurgerTop from '../burger/BurgerTop'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

it("render without crashing", () => {
    const { container } = render(<BurgerBot />)
    expect(container.firstChild).toHaveClass('burger-bot')
})


it("render without crashing 2", () => {
    const { container } = render(<BurgerTop />)
    expect(container.firstChild).toHaveClass('burger-top')
})