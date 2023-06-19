function searchProjects() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase();
  
    const projectBoxes = document.querySelectorAll('.project-box-wrapper');
  
    projectBoxes.forEach((box) => {
      const contentHeader = box.querySelector('.box-content-header').textContent.toLowerCase();
      const contentSubheader = box.querySelector('.box-content-subheader').textContent.toLowerCase();
  
      if (contentHeader.includes(searchTerm) || contentSubheader.includes(searchTerm)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  
    const explanation = document.getElementById('explanation');
    explanation.textContent = "By using the input event, the searchProjects function will be called immediately after each keystroke, allowing the search results to update in real-time based on the current value of the search input.";
  }
  
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', searchProjects);