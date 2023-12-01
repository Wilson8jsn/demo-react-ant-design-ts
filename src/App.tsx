
import React from 'react';
import MoviePage from './components/MoviePage';

const movies = [
  { title: 'Película 1', videoUrl: 'https://res.cloudinary.com/dcba9lt2s/video/upload/v1701026652/samples/sea-turtle.mp4' },
  { title: 'Película 2', videoUrl: 'https://res.cloudinary.com/dcba9lt2s/video/upload/v1701435106/hbi4n0jgf7fqyl0jw8dw.mp4' },
  { title: 'Película 3', videoUrl: 'URL_DE_TU_PELICULA_3.mp4' },

];

function App() {
  return (
    <div className="App">
      <MoviePage movies={movies} />
    </div>
  );
}

export default App;
