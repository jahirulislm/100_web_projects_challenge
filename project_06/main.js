// setting header stikcy
const navbar = document.querySelector("header");

// mobile menu toggle and hide menu on links click
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelectorAll("#hlink");
const faSolid = document.querySelector(".fa-solid");

// menu color change
const changedColor = document.querySelector(".changedColor");

// testimonials
const userTexts = document.getElementsByClassName("user-text");
const userProfiles = document.getElementsByClassName("user-profile");

// flip card query
const toggle_Btn = document.getElementById("toggleBtn"); // card btn toggle button

// card front and back sides
const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");
const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");
const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

// sticky navbar setting
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("color-white");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
    // changedColor.classList.add('color-white')
  } else {
    navbar.classList.remove("color-white");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
    // changedColor.classList.remove('color-white')
  }
};
// menu toggle
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

// hidding the mobile menu after clicking on each menu
hlink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

// change the testimonial content click on each photo/profile
function showReview() {
  for (userProfile of userProfiles) {
    userProfile.classList.remove("active-pic");
  }

  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userProfiles).indexOf(event.target);
  userProfiles[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// flip card with content
toggle_Btn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");
  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");
  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});
