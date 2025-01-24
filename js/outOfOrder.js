window.addEventListener('load', () => {
    // Fade in the loader and message after the page loads
    const message = document.querySelector('.message');
    const loader = document.querySelector('.loader');

    message.style.animation = 'fadeIn 3s ease-out forwards';
    loader.style.animation = 'spin 1s linear infinite, fadeIn 3s ease-out forwards';
});
