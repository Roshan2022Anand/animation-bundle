"use client"
import React, { useEffect, useState } from 'react'
import Eyes from "@/Components/Eyes"
const page = () => {

  const [mouseX, setmouseX] = useState(-20);
  const [mouseY, setmouseY] = useState(-20);
  const [eyeMoveX, seteyeMoveX] = useState();
  const [eyeMoveY, seteyeMoveY] = useState(-1000);


  useEffect(() => {
    const setMouseMovement = (point) => {
      setmouseX(point.x);
      setmouseY(point.y);
      seteyeMoveY(Math.floor(point.y * 100 / window.innerHeight))
      seteyeMoveX(Math.floor(point.x * 100 / window.innerWidth))
    }
    window.addEventListener("mousemove", setMouseMovement);
    return () => {
      window.removeEventListener("mousemove", setMouseMovement)
    } 
  })    
  return (
    <>
      <Eyes eyeMoveX={eyeMoveX} eyeMoveY={eyeMoveY} />
      <Eyes eyeMoveX={eyeMoveX} eyeMoveY={eyeMoveY} />
      <div className='mouth'></div>
      <div className='bg-white w-5 h-5 rounded-full absolute z-50' style={{
        top: `${mouseY}px`,
        left: `${mouseX}px`
      }}></div>
    </>
  )
}

export default page