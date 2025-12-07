import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'




const Stairs = (props) => {
  const currpath = useLocation().pathname
   const appRef=useRef(null);
  const divRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(divRef.current, {
      display: 'block'
    })
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.15
      }
    })
    tl.to(".stair", {
      y: '100%',
      stagger: {
        amount: -0.15
      }
    })
    tl.to(divRef.current, {
      display: 'none'
    })
    gsap.from(appRef.current,{
      opacity:0,
      delay:1
    })
  }, {
    dependencies: [currpath],
    scope: divRef,
    revertOnUpdate: true,
  })


  return (
    <div>
      <div>
        <div className='h-screen w-full fixed z-20 top-0 ' ref={divRef}>
          <div className='h-full w-full flex'>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
          </div>
        </div>
      </div>
      <div ref={appRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs
