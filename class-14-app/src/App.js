import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import RenderRandomQuote from './components/RenderRandomQuote/RenderRandomQuote';
import CardQuote from './components/CardQuote/CardQuote';

//https://breakingbadapi.com/documentation


function App() {

  const [ quote, setQuote] = useState({})

  const getQuotes = async () => {
    const url = 'https://breakingbadapi.com/api/quote/random';
    const resp = await axios.get(url);
    setQuote(resp.data[0]);
    //console.log(resp.data[0].quote);
  }

  useEffect(() => {
    getQuotes();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <CardQuote info={quote} />
        <button onClick={() => getQuotes()}>
            Get Random Quote
        </button>
      </header>
    </div>
  );
}

export default App;
