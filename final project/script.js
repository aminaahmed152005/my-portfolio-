// mobile menu

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.classList.toggle("show");
};

// scroll button

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
}

// form validation

const form = document.getElementById("form");
const message = document.getElementById("message");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  if (message.value.length < 10) {
    e.preventDefault();
    error.textContent = "Please enter at least 10 characters.";
  } else {
    alert("Message sent successfully!");
  }
});

const skills = document.querySelectorAll(".skill");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close");

const skillInfo = {
  html: "HTML is the foundation of every website. I use it to structure web pages with clean, semantic elements that improve accessibility and search engine optimization.",

  css: "CSS is used to style and design web pages. I create modern layouts, animations, and responsive designs to ensure websites look great on all devices.",

  js: "JavaScript adds interactivity to websites. I use it to build dynamic features, handle user events, and manipulate the DOM to create engaging user experiences.",

  git: "Git is a version control system that helps track code changes and collaborate with other developers. I use it to manage projects and keep my code organized.",

  responsive:
    "Responsive design ensures that websites work perfectly on all screen sizes including mobiles, tablets, and desktops using flexible layouts and media queries.",

  flexbox:
    "Flexbox is a CSS layout system that allows easy alignment and distribution of elements. I use it to build flexible and responsive page layouts.",
};

skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    let key = skill.dataset.skill;

    popupTitle.textContent = skill.textContent;
    popupText.textContent = skillInfo[key];

    popup.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  popup.style.display = "none";
};

function openProject() {
  window.location.href = "index.html";
}
