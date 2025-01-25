document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'animate' class when the element becomes visible
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.titleIntro');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'extendHr' class when the element becomes visible
                    entry.target.classList.add('extendHr');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.hrClass');
    elements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    
                    entry.target.classList.add('fadeInText');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.textContent');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'extendHr' class when the element becomes visible
                    entry.target.classList.add('extendHr2');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.hrClass2');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'animate' class when the element becomes visible
                    entry.target.classList.add('animateServiceTitle');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.serviceTitle');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'animate' class when the element becomes visible
                    entry.target.classList.add('appearServiceTableDiv');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.serviceTableDiv');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'animate' class when the element becomes visible
                    entry.target.classList.add('animateServiceTitle');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.serviceGrid');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'extendHr' class when the element becomes visible
                    entry.target.classList.add('extendHr3');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.hrClass3');
    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'animate' class when the element becomes visible
                    entry.target.classList.add('animateProjectCardContainer');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.projectCardContainer');
    elements.forEach((el) => observer.observe(el));
});


if(!window.matchMedia("(max-width: 640px) and (orientation: portrait)").matches){
    document.addEventListener("DOMContentLoaded", () => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'animate' class when the element becomes visible
                        entry.target.classList.add('animateProjectCard1');
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
    
        // Select all elements with the class '.titleIntro'
        const elements = document.querySelectorAll('.card1');
        elements.forEach((el) => observer.observe(el));
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'animate' class when the element becomes visible
                        entry.target.classList.add('animateProjectCard2');
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
    
        // Select all elements with the class '.titleIntro'
        const elements = document.querySelectorAll('.card2');
        elements.forEach((el) => observer.observe(el));
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'animate' class when the element becomes visible
                        entry.target.classList.add('animateProjectCard3');
                        
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
    
        // Select all elements with the class '.titleIntro'
        const elements = document.querySelectorAll('.card3');
        elements.forEach((el) => observer.observe(el));
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'animate' class when the element becomes visible
                        entry.target.classList.add('animateOuterCard1');
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
    
        // Select all elements with the class '.titleIntro'
        const elements = document.querySelectorAll('.outerCardDiv1');
        elements.forEach((el) => observer.observe(el));
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'animate' class when the element becomes visible
                        entry.target.classList.add('animateOuterCard2');
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
    
        // Select all elements with the class '.titleIntro'
        const elements = document.querySelectorAll('.outerCardDiv2');
        elements.forEach((el) => observer.observe(el));
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'animate' class when the element becomes visible
                        entry.target.classList.add('animateOuterCard3');
                        
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
    
        // Select all elements with the class '.titleIntro'
        const elements = document.querySelectorAll('.outerCardDiv3');
        elements.forEach((el) => observer.observe(el));
    });
    
}



















document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'extendHr' class when the element becomes visible
                    entry.target.classList.add('extendHr4');
                    observer.unobserve(entry.target); // Stop observing after triggering animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Select all elements with the class '.titleIntro'
    const elements = document.querySelectorAll('.hrClass4');
    elements.forEach((el) => observer.observe(el));
});