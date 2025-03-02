// Dynamic Text Animation
const dynamicText = document.querySelector(".dynamic-text");
const professions = [
  "Frontend Developer",
  "Web Designer",
  "Web Application Developer",
  "Mobile Application Developer",
  "Game Developer"
];
let index = 0;

const updateText = () => {
  dynamicText.textContent = professions[index];
  index = (index + 1) % professions.length;
};

setInterval(updateText, 2000); // Change text every 2 seconds