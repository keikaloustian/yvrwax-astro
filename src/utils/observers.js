// HEADER OBSERVER
const header = document.querySelector("header");
const hero = document.getElementById("hero");
const headerBgColour = "rgba(0, 0, 0,";

const heroOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

const heroObserver = new IntersectionObserver((entries) => {
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

// SERVICES OBSERVER
const picture = document.getElementById("wax-picture");
const servicesTitle = document.getElementById("deco-services");
const servicesSection = document.getElementById("services");

const servicesOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const servicesObserver = new IntersectionObserver(
  (entries, servicesObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        picture.classList.add("picture-show");
        servicesTitle.classList.add("fade-show");

        servicesObserver.unobserve(entry.target);
      }
    });
  },
  servicesOptions
);

servicesObserver.observe(servicesSection);

// LOCATION OBSERVER
const locationTitle = document.getElementById("deco-location");
const locationSection = document.getElementById("location");
const locationParagraphs = document.querySelectorAll(".location-p");

const locationOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const locationObserver = new IntersectionObserver(
  (entries, locationObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        locationTitle.classList.add("fade-show");
        locationParagraphs.forEach((element) => {
          element.classList.add("paragraph-show");
        });
        locationObserver.unobserve(entry.target);
      }
    });
  },
  locationOptions
);

locationObserver.observe(locationSection);

// CONTACT OBSERVER
const contactTitle = document.getElementById("deco-contact");
const contactSection = document.getElementById("contact");
const contactTitleDecor = contactTitle.nextElementSibling;

const contactOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const contactObserver = new IntersectionObserver((entries, contactObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactTitle.classList.add("fade-partial-show");
      contactTitleDecor.classList.add("line-show");
      contactObserver.unobserve(entry.target);
    }
  });
}, contactOptions);

contactObserver.observe(contactSection);
