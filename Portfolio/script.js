// Typing Effect
const textArray = [
  "AI / ML Engineer",
  "Embedded Systems Developer",
  "Full Stack Builder"
];

let typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);