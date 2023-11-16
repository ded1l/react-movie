import { useState } from "react";

// import { Linter } from "eslint";
import "./App.css";
import Header from "./header/Header";
import List from "./movies-list/List";
import Maincards from "./carousel/Maincards";

function App() {
 

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
