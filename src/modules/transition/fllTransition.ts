import { gsap } from "gsap";

export async function fillTransition(direction: string) {
  switch (direction) {
    case "right":
      const fillR = document.getElementById("transFill");
      await gsap.to(fillR, { x: window.innerWidth, duration: 0.4, yoyoEase: "Power4" });
      gsap.to(fillR, { x: window.innerWidth * 2, duration: 0.4, delay: 0.4, yoyoEase: "Power4" });
      break;
    case "left":
      const fillL = document.getElementById("transFill");
      await gsap.to(fillL, { x: window.innerWidth, duration: 0.4, yoyoEase: "Power4" });
      gsap.to(fillL, { x: 0, duration: 0.4, delay: 0.4, yoyoEase: "Power4" });
      break;
  }
}
