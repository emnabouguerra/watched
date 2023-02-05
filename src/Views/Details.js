import React from "react";
import { useLocation } from "react-router-dom";

const Details =() =>{
    const location=useLocation()
    const movie=location.state
    return(
        <div>
            <h1>{movie.name}</h1>
            <h1>rating:{movie.rating}</h1>
            <p>desc:{movie.description}</p>
            <img src={movie.posterurl} alt=""></img>
                    </div>
    )
}

export default Details;