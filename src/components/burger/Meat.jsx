import React from 'react'
import { useSelector } from 'react-redux'

const Meat = () => {
  const { meat } = useSelector(state => state.burger)
  return (
    <div>
      {
        [...Array(meat)].map((el, index) => <div key={index} className="meat" />)
      }
    </div>
  )
}

export default Meat
