import React from "react";

const Card = ({ quote }) => {
    return (
        <div className="card">
            <h1> {quote.author} </h1>
            <em>{quote.quote}</em>
            <h3>{quote.series.replace(/_/, " ")}</h3>
        </div>
    );
};

export default Card;