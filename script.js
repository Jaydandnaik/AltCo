function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.8,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();

function loaderAniumation() {
  gsap.to(".pre-loader .loader-overlay", {
    y: "-100%",
    ease: "circ.out",
    duration: 4,
    delay: 1,
  });
  gsap.to(
    ".pre-loader .loader-overlay",
    {
      display: "none",
      ease: "none",
      duration: 0.4,
    },
    "a"
  );
  gsap.to(
    ".loader-content img",
    {
      scale: 0.4,
      ease: "circ.out",
      duration: 1,
    },
    "a"
  );
  gsap.to(
    ".loader-content img",
    {
      y: "-30%",
      opacity: 0,
      ease: "back.out",
      duration: 1,
    },
    "a"
  );
  gsap.to(
    ".pre-loader .loader-move",
    {
      bottom: "-7.3vw",
      ease: "back.out",
      duration: 0.6,
    },
    "a"
  );
  gsap.to(
    ".pre-loader .loader-move",
    {
      bottom: "-13.3vw",
      ease: "back.out",
      duration: 0.6,
      delay: 0.6,
    },
    "a"
  );
  gsap.to(".pre-loader .loader-span", {
    marginTop: "0%",
    ease: "power4.out",
    duration: 1,
    // stagger: 0.01,
    delay: 6.1,
  });
  gsap.to(".pre-loader", {
    backgroundColor: "transparent",
    ease: "sine.out",
    duration: 0.5,
    delay: 6.4,
  });
  gsap.to(".pre-loader .loader-span", {
    marginTop: "-120%",
    ease: "power4.out",
    duration: 1,
    delay: 6.7,
  });
  gsap.to(".pre-loader", {
    display: "none",
    delay: 7,
  });
  gsap.to(".pre-loader .loader-move", {
    display: "none",
    delay: 7,
  });
  // gsap.from(".hero-txt h1 span", {
  //   y: "180%",
  //   ease: "back.out",
  //   stagger: 0.01,
  //   duration: 0.8,
  //   delay: 7.5,
  // });
}
loaderAniumation();

function navDropdown() {
  var menuToggle = document.getElementById("menuToggle");

  var menuBar = gsap.timeline();

  menuBar.to(
    ".bar-1",
    0.5,
    {
      attr: {
        d: "M8,2 L2,8",
      },
      x: 1,
      ease: "Power2.easeInOut",
    },
    "start"
  );

  menuBar.to(
    ".bar-2",
    0.5,
    {
      attr: {
        d: "M8,8 L2,2",
      },
      x: 1,
      ease: "Power2.easeInOut",
    },
    "start"
  );
  menuBar.to(
    "#home-header-row",
    {
      y: "-100%",
      duration: 0.4,
      ease: "sine.out",
      opacity: 0,
      delay: -1,
    },
    "start"
  );

  menuBar.reverse();

  var tl = gsap.timeline({
    paused: true,
  });
  tl.to(".fullpage-menu", {
    duration: 0,
    display: "block",
    ease: "none",
  });
  tl.from(".menu-bg", {
    duration: 1,
    y: "120%",
    ease: "back.out",
  });
  tl.from(".nav-header-row", {
    duration: 0.4,
    y: "-100%",
    ease: "sine.out",
    opacity: 0,
  });

  tl.reverse();

  menuToggle.addEventListener("click", function () {
    menuBar.reversed(!menuBar.reversed());
    tl.reversed(!tl.reversed());
  });
}
navDropdown();

function horizontalScroll() {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".horizontal-section");
    const container = document.querySelector(".container");

    gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () =>
          "+=" + (container.scrollWidth - document.documentElement.clientWidth),
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "0% 50%",
        onEnter: () => section.classList.add("active"),
        onLeaveBack: () => section.classList.remove("active"),
      });
    });
  });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "50% 50%",
      end: "150% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl.to(".cntr-1", {
    rotate: "-45deg",
    transform: "translate(-150%, -50%)",
    ease: "sine.out",
    duration: 1,
  });
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "100% 50%",
      end: "200% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl1.to(".horizontal-section", {
    backgroundColor: "#12447c",
    ease: "sine.out",
  });
  tl1.to(".section-content", {
    color: "#6a91bd",
    ease: "sine.out",
  });
  tl1.from(".cntr-2", {
    rotate: "45deg",
    transform: "translate(50%, 100%)",
    ease: "sine.out",
    delay: 0.5,
    duration: 1,
  });
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "320% 50%",
      end: "420% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl2.to(".horizontal-section", {
    backgroundColor: "#be5e38",
    ease: "sine.out",
  });
  tl2.to(".section-content", {
    color: "#FFA887",
    ease: "sine.out",
  });
  tl2.from(".cntr-3", {
    transform: "translate(0%, -150%)",
    ease: "sine.out",
    delay: -0.5,
    duration: 1,
  });
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "530% 50%",
      end: "630% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl3.to(".horizontal-section", {
    backgroundColor: "#56382c",
    ease: "sine.out",
  });
  tl3.to(".section-content", {
    color: "#FFA887",
    ease: "sine.out",
  });
  tl3.from(".cntr-4", {
    rotate: "-45deg",
    transform: "translate(50%, -100%)",
    ease: "sine.out",
    delay: -0.5,
    duration: 1,
  });
}
horizontalScroll();

function marqueAnimation() {
  gsap.to(".move-marque", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque2", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque3", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque4", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque5", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque6", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque7", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque8", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque9", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque10", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque11", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque12", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque13", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
}
marqueAnimation();

function goodGutSeedAnimation() {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      start: "25% 50%",
      end: "50% 50%",
      // markers:true,
      scrub: 1,
    },
  });
  tl4.from(
    ".fleft",
    {
      x: 100,
      scale: 0.8,
      opacity: 0,
      ease: "back.out",
      duration: 2,
    },
    "A"
  );
  tl4.from(
    ".fright",
    {
      x: -100,
      scale: 0.8,
      opacity: 0,
      ease: "back.out",
      duration: 2,
    },
    "A"
  );
}
goodGutSeedAnimation();

function imageScaleOnScroll() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      start: "-25% 50%",
      end: "125% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl.to(".page2 .image", {
    scale: 1.2,
    ease: "sine.out",
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page56",
      start: "-28% 50%",
      end: "128% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl2.to(".page56 .vegan-img", {
    scale: 1.2,
    ease: "sine.out",
  });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".dairy-image",
      start: "-28% 50%",
      end: "128% 50%",
      // markers: true,
      scrub: 2,
    },
  });
  tl3.to(".dairy-image .dairy-img", {
    scale: 1.2,
    ease: "sine.out",
  });
}
imageScaleOnScroll();

function vaganDelightAnimation() {
  document.querySelectorAll(".img1").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#E9A6BB";
      document.querySelector(".page56before").style.backgroundColor = "#E9A6BB";
      document.querySelector(".marque3 span").style.backgroundColor = "#E9A6BB";
      document.querySelector(".con1 h3").style.textDecoration = "underline";
      document.querySelector(".img1").style.scale = 1.04;
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#FAFCE6";
      document.querySelector(".page56before").style.backgroundColor = "#FAFCE6";
      document.querySelector(".marque3 span").style.backgroundColor = "#FAFCE6";
      document.querySelector(".con1 h3").style.textDecoration = "none";
      document.querySelector(".img1").style.scale = 1;
    });
  });

  document.querySelectorAll(".img2").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#C4E7E4";
      document.querySelector(".page56before").style.backgroundColor = "#C4E7E4";
      // document.querySelector(".marque3 span").style.backgroundColor = "#C4E7E4";
      document.querySelector(".con2 h3").style.textDecoration = "underline";
      document.querySelector(".img2").style.scale = 1.04;
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#FAFCE6";
      document.querySelector(".page56before").style.backgroundColor = "#FAFCE6";
      // document.querySelector(".marque3 span").style.backgroundColor = "#FAFCE6";
      document.querySelector(".con2 h3").style.textDecoration = "none";
      document.querySelector(".img2").style.scale = 1;
    });
  });

  document.querySelectorAll(".img3").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#EFAA55";
      document.querySelector(".page56before").style.backgroundColor = "#EFAA55";
      // document.querySelector(".marque3 span").style.backgroundColor = "#EFAA55";
      document.querySelector(".con3 h3").style.textDecoration = "underline";
      document.querySelector(".img3").style.scale = 1.04;
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#FAFCE6";
      document.querySelector(".page56before").style.backgroundColor = "#FAFCE6";
      // document.querySelector(".marque3 span").style.backgroundColor = "#FAFCE6";
      document.querySelector(".con3 h3").style.textDecoration = "none";
      document.querySelector(".img3").style.scale = 1;
    });
  });

  document.querySelectorAll(".img4").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#54A4C0";
      document.querySelector(".page56before").style.backgroundColor = "#54A4C0";
      // document.querySelector(".marque3 span").style.backgroundColor = "#54A4C0";
      document.querySelector(".con4 h3").style.textDecoration = "underline";
      document.querySelector(".img4").style.scale = 1.04;
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".page65").style.backgroundColor = "#FAFCE6";
      document.querySelector(".page56before").style.backgroundColor = "#FAFCE6";
      // document.querySelector(".marque3 span").style.backgroundColor = "#FAFCE6";
      document.querySelector(".con4 h3").style.textDecoration = "none";
      document.querySelector(".img4").style.scale = 1;
    });
  });
}
vaganDelightAnimation();

function dairyProductAnimation() {
  document.querySelectorAll(".product-1").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      // document.querySelector(".dairy-products").style.backgroundColor = "#C090E1";
      document.querySelector(".marque9 span").style.backgroundColor = "#C090E1";
      document.querySelector(".elem1 h3").style.textDecoration = "underline";
      document.querySelector(".product-1 #bck-1").style.scale = 1.1;
      document.querySelector(".product-1 #frnt-1").style.opacity = 0;
    });
    con.addEventListener("mouseleave", function (dets) {
      // document.querySelector(".dairy-products").style.backgroundColor = "#81b4ed";
      document.querySelector(".marque9 span").style.backgroundColor = "#81b4ed";
      document.querySelector(".elem1 h3").style.textDecoration = "none";
      document.querySelector(".product-1 #bck-1").style.scale = 1;
      document.querySelector(".product-1 #frnt-1").style.opacity = 1;
    });
  });

  document.querySelectorAll(".product-2").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      // document.querySelector(".dairy-products").style.backgroundColor = "#E9A4B9";
      document.querySelector(".marque9 span").style.backgroundColor = "#E9A4B9";
      document.querySelector(".elem2 h3").style.textDecoration = "underline";
      document.querySelector(".product-2 #bck-2").style.scale = 1.1;
      document.querySelector(".product-2 #frnt-2").style.opacity = 0;
    });
    con.addEventListener("mouseleave", function (dets) {
      // document.querySelector(".dairy-products").style.backgroundColor = "#81b4ed";
      document.querySelector(".marque9 span").style.backgroundColor = "#81b4ed";
      document.querySelector(".elem2 h3").style.textDecoration = "none";
      document.querySelector(".product-2 #bck-2").style.scale = 1;
      document.querySelector(".product-2 #frnt-2").style.opacity = 1;
    });
  });

  document.querySelectorAll(".product-3").forEach(function (con) {
    con.addEventListener("mouseenter", function (dets) {
      // document.querySelector(".dairy-products").style.backgroundColor = "#9CD6DB";
      document.querySelector(".marque9 span").style.backgroundColor = "#9CD6DB";
      document.querySelector(".elem3 h3").style.textDecoration = "underline";
      document.querySelector(".product-3 #bck-3").style.scale = 1.1;
      document.querySelector(".product-3 #frnt-3").style.opacity = 0;
    });
    con.addEventListener("mouseleave", function (dets) {
      // document.querySelector(".dairy-products").style.backgroundColor = "#81b4ed";
      document.querySelector(".marque9 span").style.backgroundColor = "#81b4ed";
      document.querySelector(".elem3 h3").style.textDecoration = "none";
      document.querySelector(".product-3 #bck-3").style.scale = 1;
      document.querySelector(".product-3 #frnt-3").style.opacity = 1;
    });
  });
}
dairyProductAnimation();

function reviewSwiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}
reviewSwiper();

function recipeSwiper() {
  var swiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
  });
}
recipeSwiper();

function FAQanimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.transition = "0.5s";
          content.style.display = "none";
        } else {
          document.querySelectorAll(".accordion-content").forEach((item) => {
            item.style.transition = "0.5s";
            item.style.display = "none";
          });
          content.style.transition = "0.5s";
          content.style.display = "block";
        }
      });
    });
  });
}
FAQanimation();
