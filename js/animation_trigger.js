document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(entry.target.dataset.animate);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

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

    elementsToObserve.forEach(({ selector, className }) => {
        document.querySelectorAll(selector).forEach((el) => {
            el.dataset.animate = className;
            observer.observe(el);
        });
    });

    // Expose the observer globally so projectCardLoader.js can use it
    window.globalObserver = observer;
});
