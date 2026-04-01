/* ハンバーガー */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* アコーディオン */
const buttons = document.querySelectorAll(".news-title");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

/* ▼ ふわっと表示（fadein 共通） */
const fadeTargets = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

fadeTargets.forEach(target => observer.observe(target));

/* ▼ aboutus + menu + wrap の画像アニメーション */
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".aboutus-img, .menu-img, .wrap-inner, .sns-buttons"
  );

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  targets.forEach(target => observer2.observe(target));
});

document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".aboutus-img.slideshow");

  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  });
});
