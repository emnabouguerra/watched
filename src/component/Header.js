import React from "react";
import "../Header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logo">
                <a href="#">Movie</a>
            </div>
            <ul className="nav-links">
                <li>
                    <a>Watch List</a>
                </li>
                <li>
                    <a>Watched</a>
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