let circles = document.querySelectorAll(".anime-circle");

let randomAnimation = anime({
  targets: circles,
  background: () => {
    hue = anime.random(0, 360);
    saturation = 60;
    lumonisity = 70;
    hslValue = "hsl(" + hue + "," + saturation + "%," + lumonisity + "%)";
    return hslValue;
  },
  borderRadius: () => {
    return anime.random(25, 50);
  },
  translateX: () => {
    return anime.random(80, -80) + "vh";
  },
  translateY: () => {
    return anime.random(80, -80) + "vh";
  },
  scale: () => {
    return anime.random(0.45, 1.75);
  },
  duration: () => {
    return anime.random(250, 1500);
  },
  delay: () => {
    return anime.random(500, 1000);
  },
  loop: true,
  direction: "alternate",
  easing: "easeOutExpo"
});
