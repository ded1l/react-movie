import { useState } from "react";

// import { Linter } from "eslint";
import "./App.css";
import Header from "./header/Header";
import List from "./movies-list/List";
import Maincards from "./carousel/Maincards";

function App() {
  // const [count, setCount] = useState(0);
   const [movies,setMovies]=useState([])
  const Moviesdata = async () => {
    try {
      let resp = await fetch("https://api.themoviedb.org/3/movie/550?api_key=9b0c48a0c93031ca5422f472c376946d");
      let data = await resp.json();
      setMovies(data); 
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  Moviesdata();

  return (
    <>
      <Header />

      <div>
        <div className="container">
          {/* <div className="img-slider">
            hello
          </div> */}
          <Maincards />         
          <List />
        </div>
     
      </div>
    </>
  );
}

export default App;
