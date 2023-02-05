import React from "react";
import {movies} from"../Views/data";
import "../Card.css"
import Card from "../component/Card"

const Movieslist =() =>{
    return(
        <div className="image">
            {movies.map((el,i)=> <Card key={i} movies={el} />)}
        </div>
    )
}


export default Movieslist;