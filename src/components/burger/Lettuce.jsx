import React from 'react'
import { useSelector } from 'react-redux'

const Lettuce = () => {
  const { lettuce } = useSelector(state => state.burger)
  return (
    <div>
      {
        [...Array(lettuce)].map((el, index) => <div key={index} className="lettuce" />)
      }
    </div>
  )
}

export default Lettuce
