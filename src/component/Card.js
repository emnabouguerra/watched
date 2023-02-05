import React from "react";
import { Link } from "react-router-dom";
import "../Card.css"

const Card =({movies}) =>{
    return(
        <Link to ={'/movie'} state={movies}>
          <img src={movies.posterurl} alt=""></img>
        </Link>
    )
}
export default Card;