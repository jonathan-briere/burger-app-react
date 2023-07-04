import React from 'react'
import { useDispatch } from 'react-redux'

const MenuList = ({name, quantity, addAction, removeAction}) => {
  const dispatch = useDispatch()
  return (
      <div className="menu-block">
        <div data-testid="name-id" className="menu-text">
          {name}
        </div>
        <button className="add" onClick={() => dispatch(addAction())}>ADD</button>
          {quantity}
        <button className="remove" onClick={() => dispatch(removeAction())}>REMOVE</button>
      </div>
  )
}


export default MenuList
