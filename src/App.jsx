import { useState, useEffect } from "react";
import "./App.css";
// import resData from '../data/data'
// import OneItm from '../components/OneItm';
import AllItmList from "../components/AllItmList";
// import FilterBtns from "../components/FilterBtns";

function App() {
  const [restoData, setRestoData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("http://localhost:5000/data").then((d) =>
      d.json()
    );
    setRestoData(data);
    // console.log(data);
  };
  

  return (
    <div className="App">
      {/* <FilterBtns handleRate={handleRate} /> */}
      <AllItmList restoData={restoData} setResto={setRestoData} />
    </div>
  );
}

export default App;
