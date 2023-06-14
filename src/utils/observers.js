// HEADER OPACITY CHANGE OBSERVER
const header = document.querySelector("header");
const hero = document.getElementById("hero");
const headerBgColour = "rgba(0, 0, 0,";

const heroOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.1) {
      header.style.backgroundColor =
        headerBgColour + ` ${1 - entry.intersectionRatio})`;
    } else {
      header.style.backgroundColor = headerBgColour + ` 1`;
    }
  });
}, heroOptions);

heroObserver.observe(hero);

// SERVICES OBSERVERS

// LOCATION OBSERVERS
// CONTACT OBSERVERS
