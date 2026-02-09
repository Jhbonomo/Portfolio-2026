// Mindmap Animation Script
document.addEventListener('DOMContentLoaded', function () {
  const mindmapContainer = document.querySelector('.mindmap-animation');

  if (!mindmapContainer) {
    console.warn('Mindmap container not found');
    return;
  }

  // Create the mindmap structure
  function createMindmap() {
    mindmapContainer.innerHTML = `
            <div class="mindmap-item" id="feature-driven">
                <div class="mindmap-category">
                    <div class="mindmap-icon" style="background: #dc3545;">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3 class="mindmap-title">Organization by Feature</h3>
                </div>
                <div class="mindmap-items">
                    <div class="mindmap-tag sheets-blue">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        Sheets
                    </div>
                    <div class="mindmap-tag sheets-blue activity-2024">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2024 - PAC managing Sheet
                    </div>
                    <div class="mindmap-tag sheets-blue activity-2023">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2023 - PAC managing Sheet
                    </div>
                    <div class="mindmap-tag sheets-blue activity-2024">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2024 - Team tasks
                    </div>
                    <div class="mindmap-tag sheets-blue activity-2023">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2023 - Team tasks
                    </div>
                    
                    <div class="mindmap-tag dashboards-yellow">
                        <i class="fas fa-chart-bar mindmap-icon-small"></i>
                        Dashboards
                    </div>
                    <div class="mindmap-tag dashboards-yellow activity-2024">
                        <i class="fas fa-chart-bar mindmap-icon-small"></i>
                        2024 - PAC financials Dashboard
                    </div>
                    <div class="mindmap-tag dashboards-yellow activity-2023">
                        <i class="fas fa-chart-bar mindmap-icon-small"></i>
                        2023 - PAC financials Dashboard
                    </div>
                    
                    <div class="mindmap-tag briefs-pink">
                        <i class="fas fa-cloud-download-alt mindmap-icon-small"></i>
                        Download center
                    </div>
                    <div class="mindmap-tag briefs-pink activity-2024">
                        <i class="fas fa-cloud-download-alt mindmap-icon-small"></i>
                        2024 - Annual report
                    </div>
                    <div class="mindmap-tag briefs-pink activity-2023">
                        <i class="fas fa-cloud-download-alt mindmap-icon-small"></i>
                        2023 - Annual report
                    </div>
                </div>
            </div>

            <div class="mindmap-item" id="transition-arrow">
                <div style="display: flex; align-items: center; height: 100%; font-size: 2rem; color: #6c757d;">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>

            <div class="mindmap-item" id="user-driven">
                <div class="mindmap-category">
                    <div class="mindmap-icon" style="background: #28a745;">
                        <i class="fas fa-folder"></i>
                    </div>
                    <h3 class="mindmap-title user-driven-title">Organization by Workflow</h3>
                </div>
                <div class="mindmap-items">
                    <div class="mindmap-tag user-driven-item activity-2024-folder">
                        <i class="fas fa-folder mindmap-icon-small"></i>
                        2024 Activity
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2024">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2024 - PAC managing Sheet
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2024">
                        <i class="fas fa-chart-bar mindmap-icon-small"></i>
                        2024 - PAC financials Dashboard
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2024">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2024 - Team tasks
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2024">
                        <i class="fas fa-cloud-download-alt mindmap-icon-small"></i>
                        2024 - Annual report
                    </div>
                    
                    <div class="mindmap-tag user-driven-item activity-2023-folder" style="background: #fff3e0 !important; color: #f57c00 !important; border: 2px solid #ffcc80 !important;">
                        <i class="fas fa-folder mindmap-icon-small"></i>
                        2023 Activity
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2023">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2023 - PAC managing Sheet
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2023">
                        <i class="fas fa-chart-bar mindmap-icon-small"></i>
                        2023 - PAC financials Dashboard
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2023">
                        <i class="fas fa-th mindmap-icon-small"></i>
                        2023 - Team tasks
                    </div>
                    <div class="mindmap-tag user-driven-item activity-2023">
                        <i class="fas fa-cloud-download-alt mindmap-icon-small"></i>
                        2023 - Annual report
                    </div>
                </div>
            </div>
        `;
  }

  // Animation sequence
  function animateMindmap() {
    const featureDriven = document.getElementById('feature-driven');
    const transitionArrow = document.getElementById('transition-arrow');
    const userDriven = document.getElementById('user-driven');
    const featureTags = document.querySelectorAll('#feature-driven .mindmap-tag');
    const userTags = document.querySelectorAll('#user-driven .mindmap-tag');

    // Check if we're on a small screen (mobile/tablet)
    const isSmallScreen = window.innerWidth <= 768;
    console.log('Screen width:', window.innerWidth, 'Is small screen:', isSmallScreen);

    // Ensure workflow organization is hidden on small screens
    if (isSmallScreen) {
      userDriven.style.opacity = '0';
      userDriven.style.pointerEvents = 'none';
      userDriven.style.transform = 'translateY(20px)';
      userDriven.style.position = 'absolute';
      userDriven.style.top = '0';
      userDriven.style.left = '0';
      userDriven.style.width = '100%';
    }

    // Step 1: Show feature-driven organization first
    setTimeout(() => {
      featureDriven.classList.add('visible');
    }, 300);

    // Step 2: Animate feature tags with staggered delay
    featureTags.forEach((tag, index) => {
      setTimeout(
        () => {
          tag.classList.add('visible');
        },
        600 + index * 100
      );
    });

    // Step 3: After feature tags are visible, start color highlighting
    setTimeout(
      () => {
        highlightFeatureTransition();
      },
      600 + featureTags.length * 100 + 500
    );

    // Step 4: Handle different animation based on screen size
    setTimeout(
      () => {
        if (isSmallScreen) {
          // Small screen: Replacement animation
          replaceWithWorkflow();
        } else {
          // Large screen: Side-by-side animation
          showSideBySide();
        }
      },
      600 + featureTags.length * 100 + 500 + featureTags.length * 150 + 500
    );
  }

  // Highlight the transition from feature-driven to user-driven
  function highlightFeatureTransition() {
    const featureTags = document.querySelectorAll('#feature-driven .mindmap-tag');

    // Highlight feature-driven tags by year
    featureTags.forEach((tag, index) => {
      setTimeout(() => {
        if (tag.classList.contains('activity-2024')) {
          tag.classList.add('blue-highlight');
        } else if (tag.classList.contains('activity-2023')) {
          tag.classList.add('orange-highlight');
        }
        tag.classList.add('moving-to-user');
      }, index * 150);
    });
  }

  // Highlight the workflow organization after it appears
  function highlightWorkflowTransition() {
    const userTags = document.querySelectorAll('#user-driven .mindmap-tag');

    // Highlight user-driven tags by year
    setTimeout(() => {
      userTags.forEach((tag, index) => {
        setTimeout(() => {
          if (tag.classList.contains('activity-2024')) {
            tag.classList.add('blue-highlight');
          } else if (tag.classList.contains('activity-2023')) {
            tag.classList.add('orange-highlight');
          }
        }, index * 150);
      });
    }, 500);
  }

  // Highlight workflow sub-items by year
  function highlightWorkflowItems() {
    const workflowItems = document.querySelectorAll(
      '#user-driven .mindmap-tag.activity-2024, #user-driven .mindmap-tag.activity-2023'
    );

    // Highlight workflow sub-items by year with staggered animation
    workflowItems.forEach((item, index) => {
      setTimeout(() => {
        if (item.classList.contains('activity-2024')) {
          item.classList.add('blue-highlight');
        } else if (item.classList.contains('activity-2023')) {
          item.classList.add('orange-highlight');
        }
      }, index * 150);
    });
  }

  // Replacement animation for small screens
  function replaceWithWorkflow() {
    console.log('Starting replacement animation');
    const featureDriven = document.getElementById('feature-driven');
    const transitionArrow = document.getElementById('transition-arrow');
    const userDriven = document.getElementById('user-driven');
    const userTags = document.querySelectorAll('#user-driven .mindmap-tag');

    // Step 4a: Feature-driven organization disappears
    setTimeout(() => {
      console.log('Adding replacing class to feature-driven');
      featureDriven.classList.add('replacing');
      transitionArrow.classList.add('replacing');
    }, 500);

    // Step 4b: Workflow organization appears in place
    setTimeout(() => {
      console.log('Adding visible and replacing-in classes to user-driven');
      userDriven.style.opacity = '1';
      userDriven.style.pointerEvents = 'auto';
      userDriven.style.transform = 'translateY(0)';
      userDriven.style.position = 'absolute';
      userDriven.style.top = '0';
      userDriven.style.left = '0';
      userDriven.style.width = '100%';
      userDriven.classList.add('visible', 'replacing-in');

      // Animate workflow tags
      userTags.forEach((tag, index) => {
        setTimeout(
          () => {
            tag.classList.add('visible');
          },
          200 + index * 100
        );
      });
    }, 1200); // Wait for feature-driven to disappear

    // Step 5: Color the workflow items
    setTimeout(
      () => {
        highlightWorkflowItems();
      },
      1200 + userTags.length * 100 + 500
    );
  }

  // Side-by-side animation for large screens
  function showSideBySide() {
    const transitionArrow = document.getElementById('transition-arrow');
    const userDriven = document.getElementById('user-driven');
    const userTags = document.querySelectorAll('#user-driven .mindmap-tag');

    // Step 4a: Show transition arrow and workflow organization
    setTimeout(() => {
      transitionArrow.classList.add('visible');
      userDriven.classList.add('visible');

      // Animate workflow tags
      userTags.forEach((tag, index) => {
        setTimeout(
          () => {
            tag.classList.add('visible');
          },
          100 + index * 100
        );
      });
    }, 100);

    // Step 5: Color the workflow items
    setTimeout(
      () => {
        highlightWorkflowItems();
      },
      100 + userTags.length * 100 + 500
    );
  }

  // Reset animation
  function resetAnimation() {
    const featureDriven = document.getElementById('feature-driven');
    const transitionArrow = document.getElementById('transition-arrow');
    const userDriven = document.getElementById('user-driven');
    const tags = mindmapContainer.querySelectorAll('.mindmap-tag');

    // Reset main containers
    featureDriven.classList.remove('visible', 'replacing');
    transitionArrow.classList.remove('visible', 'replacing');
    userDriven.classList.remove('visible', 'replacing-in');

    // Reset inline styles for user-driven (small screen positioning)
    userDriven.style.opacity = '';
    userDriven.style.pointerEvents = '';
    userDriven.style.transform = '';
    userDriven.style.position = '';
    userDriven.style.top = '';
    userDriven.style.left = '';
    userDriven.style.width = '';

    // Reset all tags
    tags.forEach(tag => {
      tag.classList.remove('visible', 'blue-highlight', 'orange-highlight', 'moving-to-user');
    });

    console.log('Animation reset complete');
  }

  // Add controls
  function addControls() {
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'mindmap-controls';
    controlsContainer.innerHTML = `
            <button class="mindmap-btn" id="resetAnimation">Reset</button>
        `;

    // Insert controls before the mindmap container
    mindmapContainer.parentNode.insertBefore(controlsContainer, mindmapContainer);

    // Event listener
    document.getElementById('resetAnimation').addEventListener('click', () => {
      console.log('Reset button clicked');
      resetAnimation();
      setTimeout(() => {
        // Re-apply small screen positioning if needed
        const isSmallScreen = window.innerWidth <= 768;
        if (isSmallScreen) {
          const userDriven = document.getElementById('user-driven');
          userDriven.style.opacity = '0';
          userDriven.style.pointerEvents = 'none';
          userDriven.style.transform = 'translateY(20px)';
          userDriven.style.position = 'absolute';
          userDriven.style.top = '0';
          userDriven.style.left = '0';
          userDriven.style.width = '100%';
        }
        animateMindmap();
      }, 100);
    });
  }

  // Initialize the mindmap
  createMindmap();
  addControls();

  // Hide workflow organization on small screens initially
  const isSmallScreen = window.innerWidth <= 768;
  if (isSmallScreen) {
    const userDriven = document.getElementById('user-driven');
    userDriven.style.opacity = '0';
    userDriven.style.pointerEvents = 'none';
  }

  // Auto-start animation after a short delay
  setTimeout(animateMindmap, 500);
});
