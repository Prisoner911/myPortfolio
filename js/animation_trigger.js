document.addEventListener("DOMContentLoaded", () => {
    // Common Intersection Observer function
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(entry.target.dataset.animate); 
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Define elements and their respective animation classes
    const elementsToObserve = [
        { selector: '.titleIntro', className: 'animate' },
        { selector: '.hrClass', className: 'extendHr' },
        { selector: '.textContent', className: 'fadeInText' },
        { selector: '.hrClass2', className: 'extendHr2' },
        { selector: '.serviceTitle', className: 'animateServiceTitle' },
        { selector: '.serviceTableDiv', className: 'appearServiceTableDiv' },
        { selector: '.serviceGrid', className: 'animateServiceTitle' },
        { selector: '.hrClass3', className: 'extendHr3' },
        { selector: '.projectCardContainer', className: 'animateProjectCardContainer' },
        { selector: '.hrClass4', className: 'extendHr4' }
    ];

    // Iterate over each element type, add a dataset attribute, and observe it
    elementsToObserve.forEach(({ selector, className }) => {
        document.querySelectorAll(selector).forEach((el) => {
            el.dataset.animate = className;
            observer.observe(el);
        });
    });

    // Additional animations only for larger screens
    if (!window.matchMedia("(max-width: 640px) and (orientation: portrait)").matches) {
        const additionalElements = [
            { selector: '.card1', className: 'animateProjectCard1' },
            { selector: '.card2', className: 'animateProjectCard2' },
            { selector: '.card3', className: 'animateProjectCard3' },
            { selector: '.outerCardDiv1', className: 'animateOuterCard1' },
            { selector: '.outerCardDiv2', className: 'animateOuterCard2' },
            { selector: '.outerCardDiv3', className: 'animateOuterCard3' }
        ];

        additionalElements.forEach(({ selector, className }) => {
            document.querySelectorAll(selector).forEach((el) => {
                el.dataset.animate = className;
                observer.observe(el);
            });
        });
    }
});
