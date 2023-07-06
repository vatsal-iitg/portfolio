let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  // reset:true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading,.heading-intro", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.projects-box,.skills-box,.textmessage,.btnsubmit",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,.about-img,.aboutdescription1,.name,.phone", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p,.aboutdescription2,.email,.subject", {
  origin: "right",
});

const typed = new Typed(".multi-text", {
  strings: [
    "Full Stack Web Developer",
    "UI/UX Designer",
    "Programming Enthusiast",
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 1400,
  loop: true,
});

var icon = document.getElementById("icon");
var myimage = document.getElementById("my-image");
var collegelogo = document.getElementById("college-logo");
icon.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    myimage.src = "./images/pic3-removebg-preview.png";
    collegelogo.src = "./images/iitgdark.png";
    icon.innerText=`DarkMode`
  } else {
    myimage.src = "./images/pic3-removebg-preview.png";
    collegelogo.src = "./images/iitgwhite.png";
    icon.innerText=`LightMode`
  }
};
