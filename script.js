const burger = document.querySelector(".burger");
const nav_ul = document.querySelector("nav ul");
const nav_li = document.querySelectorAll("nav li");
const headers = document.querySelector(".header-section");

// for fade in and out
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

burger.addEventListener("click", () => {
  nav_ul.classList.toggle("active");
  nav_li.forEach((li) => {
    li.classList.toggle("active1");
  });
});

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -25% 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// Form Error

let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submit");
  let sorryForm = document.getElementById("sorry-form");
  sorryForm.innerText =
    "Sorry Currently Contact Form is not Available. Please Contact through other medium.";
});
