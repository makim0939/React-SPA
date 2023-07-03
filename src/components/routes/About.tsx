import React, { useEffect, useRef } from "react";

//import modules
import { headerBarEnter } from "../../modules/transition/headerBar";
import { fillTransition } from "../../modules/transition/fllTransition";

function enterAnimation() {
  console.log("enter about");
  headerBarEnter("about", 0.3);
}
function leaveAnimation() {
  console.log("leave about");
}

function About() {
  const callbackRef = useRef<(str: string) => void>();

  const callback = (str: string) => {
    callbackRef.current ? leaveAnimation() : enterAnimation();
  };

  return (
    <div ref={() => callback("about")}>
      <div className="wrapper">
        <h1>Welcome to About!</h1>
        <div className="main">
          <div className="container">
            <h3>■ ここはAboutです</h3>
            <p>このサイトはReact-routerを使ってURLに合わせてDOM要素が切り替わってできています。</p>
            <p>ページに入った直後、ページを離れる直前にアニメーションの処理が実行されます。</p>
            <p>
              各ページで一番親となるDOM要素のref属性にコールバック関数を指定することで、
              そのDOM要素が表示・削除された時に処理が実行されるようになっています。
            </p>
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

export default About;
