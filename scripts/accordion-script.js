// Accordion toggle functionality
function toggleAccordion(header) {
  const accordionItem = header.parentElement;
  const content = accordionItem.querySelector('.accordion-content');
  const icon = header.querySelector('.accordion-icon');

  // Close all other accordion items
  const allAccordionItems = document.querySelectorAll('.accordion-item');
  allAccordionItems.forEach(item => {
    if (item !== accordionItem) {
      const otherContent = item.querySelector('.accordion-content');
      const otherIcon = item.querySelector('.accordion-icon');
      otherContent.classList.remove('expanded');
      otherIcon.textContent = 'v';
    }
  });

  // Toggle current item
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.textContent = 'v';
  } else {
    content.classList.add('expanded');
    icon.textContent = '^';
  }
}

// Randomize font properties function
function randomizeFontProperties(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Random font size (very small or very large)
  const fontSizes = ['0.5rem', '0.6rem', '0.7rem', '3rem', '4rem', '5rem', '6rem'];
  const randomSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

  // Random Google Font families
  const fontFamilies = [
    'Roboto, sans-serif',
    'Open Sans, sans-serif',
    'Lato, sans-serif',
    'Poppins, sans-serif',
    'Montserrat, sans-serif',
    'Raleway, sans-serif',
    'Ubuntu, sans-serif',
    'Nunito, sans-serif',
    'Playfair Display, serif',
    'Merriweather, serif',
    'Source Sans Pro, sans-serif',
    'Inter, sans-serif',
  ];
  const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];

  // Random opposite gray shades
  const grayShades = [
    '#1a1a1a', // Very dark gray
    '#2d2d2d', // Dark gray
    '#404040', // Medium dark gray
    '#666666', // Medium gray
    '#999999', // Light gray
    '#cccccc', // Very light gray
    '#e6e6e6', // Almost white gray
  ];
  const randomColor = grayShades[Math.floor(Math.random() * grayShades.length)];

  // Random line heights (very tight to very loose)
  const lineHeights = ['0.8', '1.0', '1.2', '2.0', '2.5', '3.0'];
  const randomLineHeight = lineHeights[Math.floor(Math.random() * lineHeights.length)];

  // Apply random properties
  element.style.fontSize = randomSize;
  element.style.fontFamily = randomFont;
  element.style.color = randomColor;
  element.style.lineHeight = randomLineHeight;

  // Add a subtle animation effect
  element.style.transition = 'all 0.3s ease';
  element.style.transform = 'scale(1.02)';

  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 300);
}

// Fix font properties function
function fixFontProperties(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Fix to good typography properties
  element.style.fontSize = '1.1rem';
  element.style.fontFamily = 'Zilla Slab, Georgia, serif';
  element.style.color = '#2c2c2c';
  element.style.lineHeight = '1.6';
  element.style.letterSpacing = '';
  element.style.transform = '';

  // Add a subtle animation effect
  element.style.transition = 'all 0.3s ease';
  element.style.transform = 'scale(1.02)';

  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  // Set initial weird state for surface-sense paragraph
  const surfaceSenseParagraph = document.getElementById('surface-sense-paragraph');
  if (surfaceSenseParagraph) {
    surfaceSenseParagraph.style.fontSize = '9px';
    surfaceSenseParagraph.style.lineHeight = '0.8';
    surfaceSenseParagraph.style.color = '#999999';
    surfaceSenseParagraph.style.letterSpacing = '-5%';
  }

  // Rhythm toggle functionality
  const rhythmSwitch = document.getElementById('rhythmSwitch');
  if (rhythmSwitch) {
    const rhythmContent = rhythmSwitch.closest('.accordion-content');

    // Only apply styling if accordion is expanded
    function applyDisruptedStyling() {
      if (rhythmContent.classList.contains('expanded')) {
        rhythmContent.style.transition = 'all 0.5s ease';
        rhythmContent.style.letterSpacing = '0.3em';
        rhythmContent.style.wordSpacing = '0.5em';
        rhythmContent.style.lineHeight = '0.8';
        rhythmContent.style.textAlign = 'justify';
        rhythmContent.style.fontFamily = 'Courier, monospace';
        rhythmContent.style.fontSize = '0.9rem';
        rhythmContent.style.color = '#666';
        rhythmContent.style.padding = '0.5rem 1rem';
        rhythmContent.style.border = 'none';
        rhythmContent.style.borderRadius = '0';
        rhythmContent.style.backgroundColor = '#f9f9f9';

        // Add some random spacing to paragraphs
        const paragraphs = rhythmContent.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
          p.style.marginBottom = index % 2 === 0 ? '3rem' : '0.5rem';
        });
      }
    }

    // Apply initial styling only if expanded
    applyDisruptedStyling();

    // Listen for accordion expansion/collapse
    const accordionHeader = rhythmContent.previousElementSibling;
    if (accordionHeader) {
      accordionHeader.addEventListener('click', function () {
        setTimeout(applyDisruptedStyling, 100);
      });
    }

    rhythmSwitch.addEventListener('change', function () {
      if (this.checked) {
        // Provide rhythm - apply good typography styling
        rhythmContent.style.transition = 'all 0.5s ease';
        rhythmContent.style.letterSpacing = '';
        rhythmContent.style.wordSpacing = '';
        rhythmContent.style.lineHeight = '1.6';
        rhythmContent.style.textAlign = 'left';
        rhythmContent.style.fontFamily = 'Zilla Slab, Georgia, serif';
        rhythmContent.style.fontSize = '1.1rem';
        rhythmContent.style.color = '#2c2c2c';
        rhythmContent.style.padding = '0.5rem 1rem';
        rhythmContent.style.border = 'none';
        rhythmContent.style.borderRadius = '';
        rhythmContent.style.backgroundColor = '';

        // Apply consistent spacing to paragraphs
        const paragraphs = rhythmContent.querySelectorAll('p');
        paragraphs.forEach((p) => {
          p.style.marginBottom = '1rem';
          p.style.paddingLeft = '';
        });
      } else {
        // Break the rhythm - apply disruptive styling
        applyDisruptedStyling();
      }
    });
  }

  // Pattern game functionality
  const gameDot = document.getElementById('gameDot');
  const gameArea = document.querySelector('.accordion-game-area');
  const patternSwitch = document.getElementById('patternSwitch');

  // Show appropriate instructions based on device
  const desktopInstructions = document.querySelector('.accordion-desktop-instructions');
  const mobileInstructions = document.querySelector('.accordion-mobile-instructions');

  if (window.innerWidth <= 768) {
    if (desktopInstructions) desktopInstructions.style.display = 'none';
    if (mobileInstructions) mobileInstructions.style.display = 'block';
  } else {
    if (desktopInstructions) desktopInstructions.style.display = 'block';
    if (mobileInstructions) mobileInstructions.style.display = 'none';
  }

  // Game logic for both desktop and mobile
  if (gameDot && gameArea) {
    let dotX = 50;
    let dotY = 50;
    const stepSize = 5;
    let controlsFixed = false;

    function updateDotPosition() {
      gameDot.style.left = dotX + '%';
      gameDot.style.top = dotY + '%';
    }

    function getRandomPosition() {
      return {
        x: Math.floor(Math.random() * 60) + 20,
        y: Math.floor(Math.random() * 60) + 20,
      };
    }

    function getRandomPositionAwayFromTarget(targetX, targetY, minDistance = 60) {
      let newPos;
      let attempts = 0;
      const maxAttempts = 50;

      do {
        newPos = {
          x: Math.floor(Math.random() * 60) + 20,
          y: Math.floor(Math.random() * 60) + 20,
        };
        attempts++;

        const distance = Math.sqrt(
          Math.pow(newPos.x - targetX, 2) + Math.pow(newPos.y - targetY, 2)
        );

        if (distance >= minDistance) {
          return newPos;
        }
      } while (attempts < maxAttempts);

      return {
        x: targetX > 50 ? 20 : 80,
        y: targetY > 50 ? 20 : 80,
      };
    }

    function moveTargetToRandomPosition() {
      const target = document.getElementById('gameTarget');
      const pos = getRandomPosition();
      target.style.top = pos.y + '%';
      target.style.left = pos.x + '%';
    }

    function checkWin() {
      const targetRect = document.getElementById('gameTarget').getBoundingClientRect();
      const dotRect = gameDot.getBoundingClientRect();

      const distance = Math.sqrt(
        Math.pow(dotRect.left - targetRect.left, 2) +
        Math.pow(dotRect.top - targetRect.top, 2)
      );

      if (distance < 30) {
        setTimeout(() => {
          if (controlsFixed) {
            alert('🎉 Perfect! Clear patterns make it easy to reach your goal.');
          } else {
            alert('🎉 You reached the target! But notice how confusing the random controls were...');
          }
          
          moveTargetToRandomPosition();
          const target = document.getElementById('gameTarget');
          const targetRect = target.getBoundingClientRect();
          const gameAreaRect = gameArea.getBoundingClientRect();

          const targetXPercent = ((targetRect.left - gameAreaRect.left) / gameAreaRect.width) * 100;
          const targetYPercent = ((targetRect.top - gameAreaRect.top) / gameAreaRect.height) * 100;

          const safePos = getRandomPositionAwayFromTarget(targetXPercent, targetYPercent, 40);
          dotX = safePos.x;
          dotY = safePos.y;
          updateDotPosition();
        }, 100);
      }
    }

    // Handle toggle
    if (patternSwitch) {
      patternSwitch.addEventListener('change', function () {
        controlsFixed = this.checked;
      });
    }

    // Keyboard controls
    document.addEventListener('keydown', function (e) {
      if (e.key.startsWith('Arrow')) {
        e.preventDefault();

        if (controlsFixed) {
          switch (e.key) {
            case 'ArrowLeft':
              dotX = Math.max(5, dotX - stepSize);
              break;
            case 'ArrowRight':
              dotX = Math.min(95, dotX + stepSize);
              break;
            case 'ArrowUp':
              dotY = Math.max(5, dotY - stepSize);
              break;
            case 'ArrowDown':
              dotY = Math.min(95, dotY + stepSize);
              break;
          }
        } else {
          const directions = [
            () => { dotX = Math.max(5, dotX - stepSize); },
            () => { dotX = Math.min(95, dotX + stepSize); },
            () => { dotY = Math.max(5, dotY - stepSize); },
            () => { dotY = Math.min(95, dotY + stepSize); },
          ];
          const randomDirection = directions[Math.floor(Math.random() * directions.length)];
          randomDirection();
        }

        updateDotPosition();
        checkWin();
      }
    });

    // Arrow button click handler
    function handleArrowClick(direction) {
      if (controlsFixed) {
        switch (direction) {
          case 'ArrowLeft':
            dotX = Math.max(5, dotX - stepSize);
            break;
          case 'ArrowRight':
            dotX = Math.min(95, dotX + stepSize);
            break;
          case 'ArrowUp':
            dotY = Math.max(5, dotY - stepSize);
            break;
          case 'ArrowDown':
            dotY = Math.min(95, dotY + stepSize);
            break;
        }
      } else {
        const directions = [
          () => { dotX = Math.max(5, dotX - stepSize); },
          () => { dotX = Math.min(95, dotX + stepSize); },
          () => { dotY = Math.max(5, dotY - stepSize); },
          () => { dotY = Math.min(95, dotY + stepSize); },
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        randomDirection();
      }

      updateDotPosition();
      checkWin();
    }

    // Add event listeners for arrow buttons
    const arrowUp = document.getElementById('arrowUp');
    const arrowDown = document.getElementById('arrowDown');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');

    if (arrowUp) arrowUp.addEventListener('click', () => handleArrowClick('ArrowUp'));
    if (arrowDown) arrowDown.addEventListener('click', () => handleArrowClick('ArrowDown'));
    if (arrowLeft) arrowLeft.addEventListener('click', () => handleArrowClick('ArrowLeft'));
    if (arrowRight) arrowRight.addEventListener('click', () => handleArrowClick('ArrowRight'));

    // Add touch event listeners for mobile
    if (arrowUp) arrowUp.addEventListener('touchstart', e => {
      e.preventDefault();
      handleArrowClick('ArrowUp');
    });
    if (arrowDown) arrowDown.addEventListener('touchstart', e => {
      e.preventDefault();
      handleArrowClick('ArrowDown');
    });
    if (arrowLeft) arrowLeft.addEventListener('touchstart', e => {
      e.preventDefault();
      handleArrowClick('ArrowLeft');
    });
    if (arrowRight) arrowRight.addEventListener('touchstart', e => {
      e.preventDefault();
      handleArrowClick('ArrowRight');
    });

    // Initialize positions
    moveTargetToRandomPosition();
    const target = document.getElementById('gameTarget');
    const targetRect = target.getBoundingClientRect();
    const gameAreaRect = gameArea.getBoundingClientRect();

    const targetXPercent = ((targetRect.left - gameAreaRect.left) / gameAreaRect.width) * 100;
    const targetYPercent = ((targetRect.top - gameAreaRect.top) / gameAreaRect.height) * 100;

    const safePos = getRandomPositionAwayFromTarget(targetXPercent, targetYPercent, 40);
    dotX = safePos.x;
    dotY = safePos.y;
    updateDotPosition();
  }
});
