const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const sectionId = link.getAttribute('data-section');
    
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
  });
});

const typedText = document.getElementById('typed-text');
const textArray = ['Student', 'Cyclist', 'Gamer'];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(deleteText, 2000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
