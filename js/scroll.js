// window.addEventListener('scroll', () => {
//     const mainContainer = document.querySelector('.MainContainer');
//     const content = document.querySelector('.Content');
//     const scrollPosition = window.scrollY;
//     const fadeOutHeight = mainContainer.offsetHeight;

//     // Calculate the opacity based on the scroll position
//     const opacity = Math.max(0, 1 - scrollPosition / fadeOutHeight);
//     mainContainer.style.opacity = opacity;

//     // If you want the Content to overlap, ensure it's positioned above MainContainer
//     if (scrollPosition > fadeOutHeight) {
//         mainContainer.style.zIndex = '0';
//     } else {
//         mainContainer.style.zIndex = '1';
//     }
// });
