import React from 'react'
import Bacon from './burger/Bacon'
import BurgerBot from './burger/BurgerBot'
import BurgerTop from './burger/BurgerTop'
import Cheese from './burger/Cheese'
import Lettuce from './burger/Lettuce'
import Meat from './burger/Meat'
import Menu from './Menu'


const Burger = () => (
  <div>
    <h1 className="text-center mt-4"> Burger App </h1>
    <BurgerTop />
    <Lettuce />
    <Bacon />
    <Cheese />
    <Meat />
    <BurgerBot />
    <Menu />
  </div>
)

export default Burger
