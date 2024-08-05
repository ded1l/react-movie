import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState('');
  const [collections, setCollections] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const searchCollections = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/collection?api_key=9b0c48a0c93031ca5422f472c376946d&include_adult=false&language=en-US&page=1&query=${search}`
      );

      if (response.status === 200) {
        setCollections(response.data.results);
        setIsFormVisible(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <nav className="m-4">
        <ul className="flex justify-between items-center">
          <li className="flex items-center">
            <img src="" alt="" />
            <Link to="/">
              <h1 className="border-t border-b text-4xl border-yellow-500">CINE APP</h1>
            </Link>
          </li>
          <li className="flex items-center">
            <div className="relative flex items-center shadow-md rounded-lg" ref={formRef}>
              <input
                className="border-none bg-gray-800 text-white text-base p-[0.6rem] rounded-lg"
                value={search}
                onChange={handleInputChange}
                onKeyUp={(event) => {
                  if (event.key === 'Enter') {
                    searchCollections();
                  }
                }}
                placeholder="Search"
                type="text"
              />
              <button
                className="absolute right-2 border border-yellow-500 rounded-lg bg-white p-2"
                onClick={searchCollections}
              >
                <img src="/src/assets/v.svg" alt="" />
              </button>
              {isFormVisible && collections.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-yellow-500 shadow-lg rounded-lg mt-2 z-10">
                  {collections.map((collection) => (
                    <div key={collection.id} className="p-2 border-b border-gray-200 flex items-center">
                      <img src={`https://image.tmdb.org/t/p/w300/${collection.poster_path}`} alt={collection.name} className="w-12 h-12 mr-2" />
                      <h3 className="text-lg font-semibold">{collection.name}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;