/// <reference path="../node_modules/gsap/types/index.d.ts" />

const rule = CSSRulePlugin.getRule("span:after");

gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, stagger: 0.4 });
gsap.from("img", { duration: 1, y: 30, opacity: 0, delay: 1.4 });
gsap.to(rule, {cssRule: { scaleY: 0}, duration: 1})
gsap.from("aside", {
  duration: 1,
  backgroundPosition: "200px 0px",
  opacity: 0,
});
