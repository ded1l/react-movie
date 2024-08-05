import React, { useState, useEffect } from 'react';

const List = () => {
  const [listCard, setListCard] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=9b0c48a0c93031ca5422f472c376946d`);
        const data = await response.json();
        setListCard((prevList) => [...prevList, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full my-20">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-4">Top rated movies</h1>
        <div className="flex overflow-x-auto space-x-4">
          {listCard.map((movie) => (
            <div className="inline-block  border-4 border-yellow-500 rounded-lg" key={movie.id}>
              <div className="w-48 h-auto">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="caption mt-2">
                <h3 className="text-lg font-semibold">{movie.title || movie.name}</h3>
                <p className="text-yellow-500">{movie.vote_average} tmdb</p>
              </div>
            </div>
          ))}
          <button onClick={loadMore} className="inline-block p-4 border-4 border-yellow-500 rounded-lg bg-yellow-500 text-white">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;