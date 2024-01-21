import React from "react";

const Card = ({ quote }) => {
    return (
        <div className="card">
            <h1> {quote.author} </h1>
            <em>{quote.quote}</em>
            <p>{quote.series.replace(/_/g, ' ')}</p>
        </div>
    );
};

export default Card;