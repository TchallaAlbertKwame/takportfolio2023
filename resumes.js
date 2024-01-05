// script.js

// Example: Display an alert when the page loads
window.addEventListener('load', () => {

    alert('Welcome to my CV page!Thank you for visiting.');
  });
  
  
  document.querySelectorAll('h2').forEach(title => {
    title.addEventListener('click', () => {
        const section = title.parentElement;
        section.classList.toggle('expanded');
    });
  });