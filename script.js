// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".header", { duration: 2, x: "-100", ease: "bounce" });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", { duration: 3, x: 700, scrollTrigger: ".square2" });
