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

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  const detailsLine = document.getElementById('details-line');

  const detailsSections = {
    'Personal Projects and Research': document.getElementById('personal-projects-details'),
    'Machine Learning Repositories': document.getElementById('mlrepos-details'),
    'Favorite<br>Books': document.getElementById('books-details'),
    'Academic<br>Articles': document.getElementById('articles-details')
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
    });
  });
});