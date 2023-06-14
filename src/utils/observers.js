const header = document.querySelector("header");
const hero = document.getElementById("hero");
const bgColour = "rgba(9, 9, 11,";

const heroOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    header.style.backgroundColor =
      bgColour + ` ${1 - entry.intersectionRatio})`;
  });
}, heroOptions);

heroObserver.observe(hero);
