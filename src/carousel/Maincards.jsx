import { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Maincards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9b0c48a0c93031ca5422f472c376946d");
        const data = await response.json();
        console.log(data); // Log the data to the console
        setMovies(data.results);
      } catch (error) {
        console.log(error); // Log any errors to the console
      }
    }

    fetchMovies();
  }, []);

  return (
    <Carousel>
      {movies.map((movie) => (
        <CarouselItem key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export default Maincards;