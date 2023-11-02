import { useEffect, useState } from "react";
import './style.css';

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((result) => result.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  }

  useEffect(() => {
    getQuotes();
  }, [])
  return (

    <div className="App">
      <div className='quote'>

        <p>{quotes.text}</p>
        <p>{quotes.author}</p>

        <div className='btnContainer'>
          <button onClick={getQuotes} className="btn">Get Quote</button>
        </div>

      </div>
    </div>
  );
}

export default App;
