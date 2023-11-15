import { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Maincards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     const fetchMovies= async()=>{
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9b0c48a0c93031ca5422f472c376946d");
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error); // Log any errors to the console
      }
    }

    fetchMovies();
  }, []);

  return (
    <Carousel>
      h1
      {movies.map((movie) => (
        <CarouselItem key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} />
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