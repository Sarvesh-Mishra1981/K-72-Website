import React from 'react'
import { Link } from 'react-router-dom'
function BottomText() {
  return (
    <div className='uppercase flex  item-center justify-center gap-6'>
      <Link className="text-[6.5vw] border-2 border-white leading-25  hover:border-yellow-700 hover:text-yellow-700 hover:text-9xl px-6 rounded-full " to="/projects">Projects</Link>
      <Link className="text-[6.5vw] border-2 border-white hover:border-yellow-700 hover:text-yellow-700 hover:text-9xl leading-25 px-6 rounded-full onhove" to="/agence">Agence</Link>
    </div>
  )
}

export default BottomText
