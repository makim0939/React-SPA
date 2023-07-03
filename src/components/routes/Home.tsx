import React, { useEffect, useRef } from "react";

//import modules
import { headerBarEnter } from "../../modules/transition/headerBar";

//このページに遷移した時のアニメーション
function enterAnimation() {
  console.log("enter home");
  headerBarEnter("home");
}
//別ページへとぶ直前のアニメーション
function leaveAnimation() {
  console.log("leave");
}

function Home() {
  const callbackRef = useRef<(str: string) => void>();

  //マウント・アンマウント時に呼び出される。
  const callback = (str: string) => {
    callbackRef.current ? leaveAnimation() : enterAnimation();
  };
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("home");
    callbackRef.current = callback;
  }, []);

  return (
    <div ref={() => callback("home")}>
      <div className="wrapper">
        <h1>Welcome to Home!</h1>
        <div className="main">
          <div className="container">
            <h3>■ ここはHomeです</h3>
            <p>シングルページのWebサイトでシームレスな画面遷移を実装する練習です。</p>
            <p>ヘッダーのリンクから、各ページにアクセスしてください。</p>
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

export default Home;
