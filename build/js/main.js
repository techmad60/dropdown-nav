// Gets references to DOM elements
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closehamburgerBtn = document.querySelector("#close-hamburger");
const displaySidebar = document.querySelector("#display-sidebar");

// Gets references to clickable text and dropdown content elements
const toggleFeatures = document.querySelector("#toggle-features");
const toggleCompany = document.querySelector("#toggle-company");
const displayFeatures = document.querySelector("#display-features");
const displayCompany = document.querySelector("#display-company");
const arrowFeatures = toggleFeatures.querySelector('img');
const arrowCompany = toggleCompany.querySelector('img');

const content = document.querySelector('#dynamic-content');
// Function to open the sidebar
function openSidebar() {
    displaySidebar.classList.remove('hidden');
    displaySidebar.classList.add('flex');
    content.classList.remove('hidden')
    content.classList.add('block')

}

// Function to close the sidebar
function closeSidebar() {
    displaySidebar.classList.add('hidden');
    displaySidebar.classList.remove('flex');
    content.classList.add('hidden')
    content.classList.remove('block')
}

// Event listener to open the sidebar when the hamburger button is clicked
hamburgerBtn.addEventListener('click', openSidebar);

// Event listener to close the sidebar when the close button is clicked
closehamburgerBtn.addEventListener('click', closeSidebar);

// Toggle the dropdown content and arrow rotation when the clickable text is clicked
toggleFeatures.addEventListener('click', () => {
    if (displayFeatures.style.display === 'block') {
        displayFeatures.style.display = 'none';
    } else {
        displayFeatures.style.display = 'block';
    }

    // Check if the arrow is rotated and toggle the rotation class accordingly
    const isOpen = arrowFeatures.classList.contains('rotate-180');
    
    if (isOpen) {
        arrowFeatures.classList.remove('rotate-180');
    } else {
        arrowFeatures.classList.add('rotate-180');
    }
});

toggleCompany.addEventListener('click', () => {
    if (displayCompany.style.display === 'block') {
        displayCompany.style.display = 'none';
    } else {
        displayCompany.style.display = 'block';
    }

    // Check if the arrow is rotated and toggle the rotation class accordingly
    const isOpen = arrowCompany.classList.contains('rotate-180');
    
    if (isOpen) {
        arrowCompany.classList.remove('rotate-180');
    } else {
        arrowCompany.classList.add('rotate-180');
    }
});
  // Function to adjust the width of the content div
  function adjustContentWidth() {
    // Get a reference to the content div
    const content = document.querySelector('#dynamic-content');
    
    // Get the width of the navbar
    const navbarWidth = document.querySelector('#display-sidebar').offsetWidth;
    
    // Get the current width of the browser window
    const pageWidth = window.innerWidth;
    
    // Check if the screen width is 639px or below
        // Set the width of the content div dynamically based on the navbar width
        content.style.width = `calc(100% - ${navbarWidth}px)`;
    // } else {
    //     // Set the width of the content div to 100% for screens wider than 639px
    //     content.style.width = '100%';
    // }
}

// Initial adjustment on page load
adjustContentWidth();

// Listen for window resize events to adjust width dynamically
window.addEventListener('resize', adjustContentWidth);