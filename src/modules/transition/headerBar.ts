import { gsap } from "gsap";

export function headerBarEnter(page: string) {
  const bar = document.getElementById("bar");
  switch (page) {
    case "home":
      gsap.to(bar, { x: -270, duration: 0.3 });
      break;
    case "about":
      gsap.to(bar, { x: 0, duration: 0.3 });
      break;
    case "contact":
      gsap.to(bar, { x: 288, duration: 0.3 });
      break;
    default:
    //error
  }
}
