const preloadImage = img => {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
};

const images = document.querySelectorAll("[data-src]");
const imageOptions = {
    rootMargin: "0px 0px 50px 0px"
};
const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    preloadImage(entry.target);
    imageObserver.unobserve(entry.target);
  });
}, imageOptions);

images.forEach(image => {
  imageObserver.observe(image);
});
