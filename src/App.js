import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "./components/Card";


const App = () => {

    const [quoteData, setQuoteData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.seriesquotes.10cyrilc.me/quote/?count=24&all=true")
            .then((res) => setQuoteData(res.data));
    }, []);

    return (
        <ul>
            {quoteData
            .map((quote) => 
               (<Card key={quote.idQuote} quote={quote} />)
            )}        
            </ul>
    );

}

export default App;