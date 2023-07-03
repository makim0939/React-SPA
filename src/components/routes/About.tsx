import React, { useEffect, useRef } from "react";

function About() {
  const callbackRef = useRef<(str:string) => void>();
  //アンマウント時に呼び出し。
  const callback = (str:string)=>{console.log(callbackRef.current);window.alert(str)}
  return (
    <div ref={()=>callback("about")}>
      <h1>Welcome to about!</h1>
    </div>
  );
}

export default About;
