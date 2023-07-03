import { gsap } from "gsap";

export function headerBarEnter(page: string, duration: number) {
  const bar = document.getElementById("bar");
  switch (page) {
    case "home":
      gsap.to(bar, { x: -270, duration });
      break;
    case "about":
      gsap.to(bar, { x: 0, duration });
      break;
    case "contact":
      gsap.to(bar, { x: 288, duration });
      break;
    default:
    //error
  }
}
