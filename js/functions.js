function shuffleCards() {
    const container = document.querySelector('.mlcardcontainer');
    const cards = Array.from(container.children);

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    cards.forEach(card => container.appendChild(card));
}

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card');
    const detailsLine = document.getElementById('details-line');

    const detailsSections = {
        'Personal Projects and Research': document.getElementById('personal-projects-details'),
        'Machine Learning Repositories': document.getElementById('mlrepos-details'),
        'Favorite Books': document.getElementById('books-details'),
        'Academic Articles': document.getElementById('articles-details')
    };

    let activeCard = null;

    function collapseAll() {
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.maxHeight = '';

            const img = card.querySelector('img');
            const title = card.querySelector('h3');
            const details = card.querySelector('.project-details');

            if (img) {
                img.style.width = '';
                img.style.margin = '';
                img.style.float = '';
                img.style.objectFit = '';
                img.style.objectPosition = '';
                img.style.display = '';
            }
            if (title) title.style.textAlign = '';
            if (details) details.style.display = '';
        });

        for (const key in detailsSections) {
            if (detailsSections[key]) detailsSections[key].style.display = 'none';
        }
        if (detailsLine) detailsLine.style.display = 'none';

        activeCard = null;
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardTitle = card.querySelector('h3').textContent;

            if (activeCard === card) {
                collapseAll();
                return;
            }

            collapseAll();
            activeCard = card;

            if (detailsSections[cardTitle]) {
                detailsSections[cardTitle].style.display = 'block';
                if (detailsLine) detailsLine.style.display = 'block';
            }

            cards.forEach(otherCard => {
                if (otherCard !== card) otherCard.style.display = 'none';
            });

            const image = card.querySelector('img');
            const title = card.querySelector('h3');
            const details = card.querySelector('.project-details');

            card.style.maxHeight = '70px';

            if (image) {
                image.style.width = '100%';
                image.style.margin = '0 auto';
                image.style.display = 'block';
                image.style.float = 'none';
                image.style.objectFit = 'cover';
                image.style.objectPosition = 'top';
            }
            if (title) title.style.textAlign = 'center';
            if (details) details.style.display = 'none';
        });
    });
});
