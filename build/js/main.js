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


// Function to open the sidebar
function openSidebar() {
    displaySidebar.classList.remove('hidden');
    displaySidebar.classList.add('flex');
}

// Function to close the sidebar
function closeSidebar() {
    displaySidebar.classList.add('hidden');
    displaySidebar.classList.remove('flex');
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
