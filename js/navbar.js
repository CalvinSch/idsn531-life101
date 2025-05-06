// js/navbar.js

// 1. Grab the elements right away (script is at bottom of body)
const burger = document.querySelector('.navbar__burger');
const menu   = document.querySelector('.navbar__menu');

// 2. Debug‐logging to confirm they exist
console.log('🔧 Navbar toggle:', { burger, menu });

if (!burger || !menu) {
  console.error('Navbar toggle elements not found!');
} else {
  // 3. Add click listener
  burger.addEventListener('click', () => {
    console.log('🍔 burger clicked; toggling menu');
    menu.classList.toggle('show');
  });
}
