 import "./Header.css"
 import  { useState } from 'react';
 import axios from 'axios';
const Header=()=>{
    const [search, setSearch] = useState('');
    const [collections, setCollections] = useState([]);
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
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return(
        <div>
            <nav>
                <ul>
                    <li><img src="" alt="" /><h1>CINE APP</h1></li>
                    <li>
                        <div className="input-container">
                                    <input   value={search}
                    onChange={handleInputChange} placeholder="Search..." type="text" />
                    <button onClick={searchCollections}><img src="/src/assets/v.svg" alt="" /></button>
                        </div>
                    </li>
                </ul>
            </nav>
            <div>
        {collections.map((collection) => (
          <div key={collection.id}>
            <img src={`https://image.tmdb.org/t/p/w300/${collection.poster_path}`} alt={collection.name} />
            <h3>{collection.name}</h3>
            <p>{collection.overview}</p>
          </div>
           ))}
        </div>
        </div>
    )
 }
 export default Header;