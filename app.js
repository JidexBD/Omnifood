// we want to set the year in the footer
const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");

yearEl.textContent = currentYear;

// mobile nav

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// our sticky naigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    // to remove it
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the view port
    root: null,
    // when the hero section is out of the view port
    threshold: 0,
    rootMargin: "-80px",
  },
);

obs.observe(sectionHeroEl);

// smooth scrolling for ad all browsers and safari with js

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("link", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
