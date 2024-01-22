import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "./components/Card";

const App = () => {
    const [quoteData, setQuoteData] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.seriesquotes.10cyrilc.me/quote/?count=24&all=true");
                setQuoteData(response.data);

                // Générer une citation aléatoire après récupération des données avec un délai de 200ms
                setTimeout(() => {
                    shuffleQuote();
                }, 4500);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    }, []);

    // Générer une citation aléatoire
    const shuffleQuote = () => {
        if (quoteData.length > 0) {
            const randomIndex = Math.floor(Math.random() * quoteData.length);
            const randomQuote = quoteData[randomIndex];
            setRandomQuote(randomQuote);
        }
    };

    return (
        <div className="container">
            <button onClick={shuffleQuote}> Générer une citation </button>
            {randomQuote && <Card key={randomQuote.idQuote} quote={randomQuote} />}
        </div>
    );
};

export default App;
