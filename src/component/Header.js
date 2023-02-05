import React from "react";
import { Link } from "react-router-dom";
import "../Header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logo">
                <Link to={"/movies"}>Movie</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/watchlist">Watch List</Link>
                </li>
                <li>
                    <Link to="/watched">Watched</Link>
                </li>
                <li>
                    <a className="btn">Add</a>
                </li>
            </ul>
            <div className="input-container">
                        <input type="text" 
                            placeholder="Search for a movie" />
                    </div>
                   
        </div>
        </div>
  
);
}
export default Header;