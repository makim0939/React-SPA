//不透明度のアニメーションでふわっと消えてふわっと出てくるようにしたい。
//Linkコンポーネントをクリックした後、ページ遷移までの間に処理をはさみたい。
//refの更新をトリガーにするとasync/awaitを使っても止められない感じ。
//querySelectorでは、遷移前のDOM要素がとれてるから間に合ってはいそうなんだけど...

//今のところ解決策は、onClickで発火させるしかない。

import { gsap } from "gsap";
export async function opacityTransition() {
  const dom = document.querySelectorAll(".wrapper *");
  const tl = gsap.timeline();
  dom.forEach((item) => {
    tl.to(item, { opacity: 0, duration: 0.25 });
    console.log(item);
  });
  await tl.play();
}
