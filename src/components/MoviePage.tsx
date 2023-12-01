// En src/components/MoviePage.tsx
import React from 'react';
import { Button, Card } from 'antd';




interface Movie {
  title: string;
  videoUrl: string;
}

interface MoviePageProps {
  movies: Movie[];
}
const MoviePage: React.FC<MoviePageProps> = ({ movies }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Películas</h1>
      {movies.map((movie, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <h2>{movie.title}</h2>
          <Button type="primary" onClick={() => window.open(movie.videoUrl, '_blank')}>
            Reproducir
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default MoviePage;
