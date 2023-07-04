import React from 'react'
import { useSelector } from 'react-redux'

const Bacon = () => {
  const { bacon } = useSelector(state => state.burger)
  return (
    <div>
      {
        [...Array(bacon)].map((el, index) => <div key={index} className="bacon" />)
      }
    </div>
  )
}

export default Bacon
