
import "./App.css";
import Header from "./header/Header";
import List from "./movies-list/List";
import Maincards from "./carousel/Maincards";

function App() {
 

  return (
    <>
      <Header />

      <div>
      
          <Maincards />         
          <List />
     
      </div>
    </>
  );
}

export default App;
