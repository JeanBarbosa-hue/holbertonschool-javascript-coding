const axios = require('axios');

function getMovieCharacters(movieId) {
  const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

  axios
    .get(apiUrl)
    .then((response) => {
      const movieData = response.data;
      console.log(`Characters in ${movieData.title} (${movieData.release_date}):`);

      const characterUrls = movieData.characters;
      characterUrls.forEach((characterUrl) => {
        axios
          .get(characterUrl)
          .then((characterResponse) => {
            const characterData = characterResponse.data;
            console.log(characterData.name);
          })
          .catch((error) => {
            console.error(`Error fetching character data: ${error}`);
          });
      });
    })
    .catch((error) => {
      console.error(`Error fetching movie data: ${error}`);
    });
}

const movieId = 3; // Replace with the desired movie ID (e.g., 3 for 'Return of the Jedi')
getMovieCharacters(movieId);
