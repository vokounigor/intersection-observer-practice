const header = document.querySelector("header");
const section1 = document.querySelector(".home-intro");
const section1Options = {
  rootMargin: "-150px 0px 0px 0px"
};

const faders = document.querySelectorAll(".fade-in");
const faderOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const sliders = document.querySelectorAll(".slide-in");

const section1Observer = new IntersectionObserver(
  (entries, section1Observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        return;
      }
      header.classList.remove("nav-scrolled");
    });
  },
  section1Options
);

section1Observer.observe(section1);

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, faderOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
