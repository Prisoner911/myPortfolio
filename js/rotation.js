let rotation = 0; 
let autoSpeed = 0.5;
let scrollSpeed = 10; 
let isScrolling = false;
let isHoveringSlider = false;

const slider = document.querySelector(".slider");
const contactInfo = document.querySelector(".contactInfo");

// Function to rotate the slider automatically
function autoRotate() {
    if (!isScrolling) {
        rotation += autoSpeed; 
        slider.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
    }
}

setInterval(autoRotate, 50);

contactInfo.addEventListener("mouseenter", () => {
    isHoveringSlider = true;
});

contactInfo.addEventListener("mouseleave", () => {
    isHoveringSlider = false;
});


document.addEventListener("wheel", (event) => {
    if (!isHoveringSlider) return;

    event.preventDefault();

    isScrolling = true;
    if (event.deltaY > 0) {
        
        rotation += scrollSpeed;
    } else {
        
        rotation -= scrollSpeed;
    }

    slider.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;

   
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 1000);
}, { passive: false }); 

