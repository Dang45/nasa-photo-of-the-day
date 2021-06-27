// import React from "react";
import React, {useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getDefaultWatermarks } from "istanbul-lib-report";

export const API_KEY = 'NYUK6yQDvbMm8XOxgM1HN03F8AN01FSiY3fbcGej';
export const BASE_URL = 'https://api.nasa.gov/planetary/apod?';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=NYUK6yQDvbMm8XOxgM1HN03F8AN01FSiY3fbcGej')
      .then(res => {
        console.log(res)
        setData(res.data)


           })

             .catch(error =>{
               console.log(error)
             })


    }
    getData()
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <p>This right here is Nasa's photo of the day! Enjoy!!!</p>
      <p>{data.title}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      <img src={data.url} alt="space stuff"/>
    </div>
  );
}
export default App;
