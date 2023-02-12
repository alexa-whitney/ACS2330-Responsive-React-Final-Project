import React from 'react';
import './Title.css'
import { NavLink } from 'react-router-dom'
import RandomBook from '../RandomBook/RandomBook'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>
          <div class="logo">
            <b>th<span>e</span> be<span>g</span>uiling booksh<span>e</span>lf</b>
          </div>
        </h1>
        <div className="Title-Subtitle">Be entertained.</div>
        <div>
        <NavLink 
	        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	        to="/">List
        </NavLink>
        <NavLink 
	        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	        to="/about">About
          </NavLink>
        <RandomBook />
        </div>

      </header>
    </div>
  )
}

export default Title;