import Nav from "./Nav";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Quotes from "./Quotes";
import Data from "./data.json"
import axios from 'axios';
import {useState, useEffect} from 'react'
import Form from "./Form";


function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    let url = `https://api.api-ninjas.com/v1/quotes?limit=10`
      let headers = {
        "X-Api-Key":`d/uhYHKHyjNlD40HEkpgBQ==ob00EVTaAj17v7gs`,
        }
      let response = axios.get(url, {'headers' :headers,
      withCredentials: false,
      params:{categories:'hope'}
    }, )
      .then(response => {setQuotes(response.data)})
  }, [])
  return (
    <>
      <Nav></Nav>
      <Form></Form>
      {quotes.map(value => {
        return <Quotes list={value.quote}></Quotes>
      })}
    </>
  );
}

export default App;
