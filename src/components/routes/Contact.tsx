import React, { useRef } from "react";

//import modules
import { headerBarEnter } from "../../modules/transition/headerBar";

function enterAnimation() {
  console.log("enter Contact");
  headerBarEnter("contact");
}
function leaveAnimation() {
  console.log("leave");
}

function Contact() {
  const callbackRef = useRef<(str: string) => void>();

  const callback = (str: string) => {
    callbackRef.current ? leaveAnimation() : enterAnimation();
  };

  return (
    <div ref={() => callback("contact")}>
      <div className="wrapper">
        <h1>Welcome to Contact!</h1>
        <div className="main">
          <div className="container">
            <h3>■ ここはContactです</h3>
            <p>デモページなので書くことはないです。</p>
            <p>でも、見た目を良くするためにある程度の文字が必要です。</p>
          </div>
          <div className="container">
            <h3>■ 注意</h3>
            <p>React routerの仕様でリロードすると404エラーが発生します。</p>
            <p>致命的。どうにかして、なおさねば、、、</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
