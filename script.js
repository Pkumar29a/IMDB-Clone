// Function to search movies
async function searchMovies(searchTerm) {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    return data.Search;
}

// Function to display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result');
        resultItem.innerHTML = `
            <h3>${result.Title}</h3>
            <p>Year: ${result.Year}</p>
            <button class="add-to-favorites" data-id="${result.imdbID}">Add to Favorites</button>
        `;
        searchResults.appendChild(resultItem);
    });
}

// Function to display movie details
async function displayMovieDetails(movieId) {
    const response = await fetch("https://www.imdb.com/");
    const data = await response.json();
    // Display movie details (name, photo, plot, etc)
    console.log(data);
}

// Event: Search for movies
document.getElementById('search').addEventListener('input', async (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 2) {
        const results = await searchMovies(searchTerm);
        displaySearchResults(results);
    }
});

// Event: Add to favorites
document.getElementById('search-results').addEventListener('click', async (e) => {
    if (e.target.classList.contains('add-to-favorites')) {
        const movieId = e.target.getAttribute('data-id');
        // Add movie to favorites
        console.log('Adding movie to favorites with ID:', movieId);
    }
});
