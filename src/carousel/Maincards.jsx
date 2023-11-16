import { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import "./Maincards.css"
const Maincards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     const fetchMovies= async()=>{
      try {
        const response = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=9b0c48a0c93031ca5422f472c376946d");
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error); 
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="silder">
    <Carousel>
      
      {movies.map((movie) => (
        <CarouselItem key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} />
          <Carousel.Caption>
            <h3>{movie.title||movie.name}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
    </div>
  );
}

export default Maincards;