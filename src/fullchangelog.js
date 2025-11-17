import './fullchangelog.css'

const targets = document.querySelectorAll(".list__item ");
const threshold = 0.5;
const ANIMATED_CLASS = "visible";
const STAGGER_INCREMENT = 400;
const RESET_TIMEOUT = 500;


let staggerDelay = 0;
let delayResetTimer = null;


function callback(entries, observer) {

  clearTimeout(delayResetTimer);

  entries.forEach((entry) => {

    const elem = entry.target;

    if (entry.intersectionRatio >= threshold) {

      setTimeout(() => {
        elem.classList.add(ANIMATED_CLASS);
      }, staggerDelay);

      staggerDelay += STAGGER_INCREMENT;

      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });

  delayResetTimer = setTimeout(() => {
    staggerDelay = 0;
  }, RESET_TIMEOUT);
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}
