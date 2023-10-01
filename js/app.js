let header = document.querySelector("header");
let menu = document.querySelector(".nav-links");
window.addEventListener("scroll", () => {
  if (this.scrollY > 120) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
let navLinks = document.querySelectorAll(".nav-link a");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}
window.onscroll = function() {
  if (this.scrollY >= 100) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
};
// services-swiper
let servicesSwiper = new Swiper(".servicesSwiper", {
  spaceBetween: 10,
  grabCursor: true,
  pagination: true,
  loop: true,
  autoplay: {
    delay: 500
  },
  speed: 1500,
  pagination: {
    el: ".servicesSwiperPagination",
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 4
    },
    350: {
      slidesPerView: 2
    }
  }
});
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
let toogler = document.querySelector(".toogler");
toogler.addEventListener("click", () => {
  menu.classList.toggle("showing");
  if (menu.classList.contains("showing")) {
    toogler.querySelector("i").classList =
      "fa-sharp fa-solid fa-bars-staggered";
    if (!header.classList.contains("sticky")) {
      header.classList.add("fff");
    }
  } else {
    toogler.querySelector("i").classList = "fa-sharp fa-solid fa-bars";
    if (!header.classList.contains("sticky")) {
      header.classList.remove("fff");
    }
  }
});
