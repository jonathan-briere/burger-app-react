import React from 'react'
import '../stylesheet/burger.scss'
import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../redux/actions'
import MenuList from './burger/MenuList'

const Menu = () => {
  const { lettuce, bacon, cheese, meat } = useSelector(state => state.burger)
  const dispatch = useDispatch()

  const price = () => (lettuce * 0.5) + (bacon * 1) + (cheese * 1.5) + (meat * 2);

  return (
    <div className="menu">
      Price = ${price()} 
      <MenuList name='Lettuce'
        quantity={lettuce}
        addAction={Action.AddLettuce}
        removeAction={Action.RemoveLettuce} />

      <MenuList name='Bacon'
        quantity={bacon}
        addAction={Action.AddBacon}
        removeAction={Action.RemoveBacon} />


      <MenuList name='Cheese'
        quantity={cheese}
        addAction={Action.AddCheese}
        removeAction={Action.RemoveCheese} />

      <MenuList name='Meat'
        quantity={meat}
        addAction={Action.AddMeat}
        removeAction={Action.RemoveMeat} />

      <button className="remove" onClick={() => dispatch(Action.RemoveAll())}>REMOVE</button>
    </div>
  )
}

export default Menu
