// Smooth Scroll (Lenis)
const lenis = new Lenis({
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP
gsap.registerPlugin(ScrollTrigger);

// Loader animation
gsap.to(".loader", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  onComplete: () => document.querySelector(".loader").style.display = "none"
});

// Hero animation
gsap.from(".hero h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1
});

gsap.from(".hero p", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1.2
});

// Scroll reveal
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});

// Cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Magnetic Buttons
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x: 0, y: 0 });
  });
});

// Parallax
gsap.to(".hero img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});
