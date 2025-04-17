document.addEventListener("DOMContentLoaded", () => {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projectCardInnerContainer');
            let cardCycle = 1;

            projects.forEach((project, index) => {
                const outerDiv = document.createElement('div');
                outerDiv.className = `outerCardDiv outerCardDiv${cardCycle}`;
                outerDiv.id = `outerCardDiv${cardCycle}`;

                const linkDiv = document.createElement('div');
                linkDiv.className = `linkDiv card${cardCycle}`;

                const anchor = document.createElement('a');
                anchor.href = project.link;

                const projectCard = document.createElement('div');
                projectCard.className = 'ProjectCard';

                const innerCard = document.createElement('div');
                innerCard.className = 'innerProjectCard';

                const imgDiv = document.createElement('div');
                imgDiv.className = 'cardImgDiv';
                const img = document.createElement('img');
                img.src = project.image;
                img.className = 'card_img';
                img.alt = `${project.title} Logo`;
                imgDiv.appendChild(img);

                const bodyDiv = document.createElement('div');
                bodyDiv.className = 'cardBody';

                const title = document.createElement('h5');
                title.className = 'card_title';
                title.textContent = project.title;

                const desc = document.createElement('p');
                desc.className = 'card_text';
                desc.textContent = project.description;

                bodyDiv.appendChild(title);
                bodyDiv.appendChild(desc);
                innerCard.appendChild(imgDiv);
                innerCard.appendChild(bodyDiv);
                projectCard.appendChild(innerCard);
                anchor.appendChild(projectCard);
                linkDiv.appendChild(anchor);
                outerDiv.appendChild(linkDiv);
                container.appendChild(outerDiv);

                cardCycle = cardCycle % 3 + 1;
            });

            // Trigger animations only on larger screens
            if (!window.matchMedia("(max-width: 640px) and (orientation: portrait)").matches) {
                const observer = window.globalObserver;
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
        })
        .catch(err => console.error('Error loading JSON:', err));
});
