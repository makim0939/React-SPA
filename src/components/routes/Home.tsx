import React, { useEffect, useRef } from "react";
import {gsap} from 'gsap'

function leaveAnimation(){
  console.log("leave")
}
function enterAnimation() {
  console.log("enter")
  const bar = document.getElementById("bar")
  gsap.to(bar, {x:-270, duration: .3})
}


function Home() {
  const callbackRef = useRef<(str:string) => void>();
  //アンマウント時に呼び出し。
  const callback = (str:string)=>{
    callbackRef.current ? leaveAnimation() : enterAnimation()
  }
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=> {
   console.log("home")
   callbackRef.current = callback
  }, [])

  


  return (
    <div ref={()=>callback("home")}>
      <h1>Welcome to home!</h1>
    </div>
  );
}

export default Home;
