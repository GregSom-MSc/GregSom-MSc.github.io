function shuffleCards() {
    const container = document.querySelector('.mlcardcontainer');
    console.log("Container:", container); // Check if the container element is found

    // First, we get the cards!
    const cards = Array.from(container.children);
    console.log("Cards:", cards); // Check if any cards are found
  
    // Shuffling cards using Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  
    // Finally, we add the shuffled cards back
    cards.forEach(card => container.appendChild(card));
  }

  // this shows the contents announced in each card.
document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.project-card');
const detailsLine = document.getElementById('details-line');

const detailsSections = {
    'Personal Projects and Research': document.getElementById('personal-projects-details'),
    'Machine Learning Repositories': document.getElementById('mlrepos-details'),
    'Favorite Books': document.getElementById('books-details'),
    'Academic Articles': document.getElementById('articles-details')
};

cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardTitle = card.querySelector('h3').textContent;

        // Check if the clicked card is already visible
        const isVisible = detailsSections[cardTitle] && detailsSections[cardTitle].style.display === 'block';

        // Hide all sections and the line
        for (const section in detailsSections) {
            detailsSections[section].style.display = 'none';
        }
        detailsLine.style.display = 'none';

        // Show the section if it was not already visible
        if (!isVisible && detailsSections[cardTitle]) {
            detailsSections[cardTitle].style.display = 'block';
            detailsLine.style.display = 'block';
        }

        // 1. Hide other cards
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.display = 'none';
            }
        });

        // 2. Move image to center and show title
        const image = card.querySelector('img');
        const title = card.querySelector('h3');
        const details = card.querySelector('.project-details');

        card.style.maxHeight = '70px';
        image.style.width = '100%';
        image.style.margin = '0 auto'; // Center horizontally
        image.style.display = 'block'; // Ensure it's a block element
        image.style.float = 'none'; // Remove any floating
        image.style.objectFit = 'cover'; // Cover the container
        image.style.objectPosition = 'top'; // Position the top of the image

        title.style.textAlign = 'center';

        details.style.display = 'none'; // Hide details

        // 3. Add a second click listener to show all cards again
        card.addEventListener('click', function showAllCards() {
            cards.forEach(otherCard => {
                otherCard.style.display = 'block';
            });
            card.style.maxHeight = '150px';
            image.style.width = '30%';
            image.style.margin = '0 10px 0 0';
            image.style.float = 'left';

            title.style.textAlign = 'left';

            details.style.display = 'block';

            card.removeEventListener('click', showAllCards); // Remove the listener to avoid conflicts
        });
    });
});
});