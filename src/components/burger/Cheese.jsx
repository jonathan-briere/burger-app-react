import React from 'react'
import { useSelector } from 'react-redux'

const Cheese = () => {
  const { cheese } = useSelector(state => state.burger)
  return (
    <div>
      {
        [...Array(cheese)].map((el, index) => <div key={index} className="cheese" />)
      }
    </div>
  )
}
export default Cheese
