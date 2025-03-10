const roles = ["Web Developer", "Intermediate Video Editor"];
let roleIndex = 0;
let charIndex = 0;
const speed = 150; // Typing speed
const delayBetween = 1500; // Delay before switching
const textElement = document.getElementById("changing-text");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        textElement.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, delayBetween);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        textElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
