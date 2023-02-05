import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Details from "./Views/Details";
import Movieslist from "./Views/Movieslist";
import Watched from "./Views/Watched";
import Watchlist from "./Views/Watchlist";



const App =() =>{
  return (
    <div>
      <Header />
   
      <Routes>
        <Route path="*" element={<h1>NOT FOUND</h1>} />
        <Route path="/" element={<Movieslist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie" element={<Details />} />
        
      </Routes>
      {/*..*/}

    </div>

  
  )
}

export  default App;
