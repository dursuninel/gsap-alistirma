// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".header", { duration: 2, x: "-100", ease: "bounce" });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  //   x: 700,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 20%",
    pin: ".square",
    pinSpacing: true,
    scrub: true,
    toggleActions: "restart pause resume reset ",
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});

gsap.to(".square2", {
  //   x: 700,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 20%",
    pin: true,
    pinSpacing: true,
    scrub: true,
    toggleActions: "restart pause resume reset ",
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});


gsap.to(".square3", {
    //   x: 700,
    scrollTrigger: {
      trigger: ".square3",
      start: "top 80%",
      end: "top 20%",
      pin: true,
      pinSpacing: true,
      scrub: true,
      toggleActions: "restart pause resume reset ",
      markers: {
        startColor: "purple",
        endColor: "fuchsia",
        fontSize: "3rem",
      },
    },
  });

  
  gsap.to(".square4", {
    //   x: 700,
    scrollTrigger: {
      trigger: ".square4",
      start: "top 80%",
      end: "top 20%",
      pin: true,
      pinSpacing: true,
      scrub: true,
      toggleActions: "restart pause resume reset ",
      markers: {
        startColor: "purple",
        endColor: "fuchsia",
        fontSize: "3rem",
      },
    },
  });
  