const searchBar = document.getElementById('search-bar');
const suggestionsContainer = document.getElementById('suggestions-container');

// Sample data for suggestions
const suggestions = ['JavaScript', 'Jira', 'HTML', 'CSS', 'React', 'Node.js', 'Python', 'Java', 'C++'];

// Event listener for input changes
searchBar.addEventListener('input', function() {
  const query = searchBar.value.toLowerCase();
  const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));

  renderSuggestions(filteredSuggestions, query);
});

// Function to render suggestions
function renderSuggestions(filteredSuggestions, query) {
  suggestionsContainer.innerHTML = '';

  if (filteredSuggestions.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  filteredSuggestions.forEach(suggestion => {
    const suggestionElement = document.createElement('div');
    suggestionElement.classList.add('suggestion');

    // Bold the matched part of the suggestion
    const index = suggestion.toLowerCase().indexOf(query);
    const boldedText = suggestion.substring(0, index) + '<strong>' + suggestion.substring(index, index + query.length) + '</strong>' + suggestion.substring(index + query.length);

    suggestionElement.innerHTML = boldedText;

    suggestionElement.addEventListener('click', function() {
      searchBar.value = suggestion;
      suggestionsContainer.style.display = 'none';
    });

    suggestionsContainer.appendChild(suggestionElement);
  });

  suggestionsContainer.style.display = 'block';
}

// Close suggestions when clicking outside the search bar
document.addEventListener('click', function(event) {
  if (!searchBar.contains(event.target) && !suggestionsContainer.contains(event.target)) {
    suggestionsContainer.style.display = 'none';
  }
});
