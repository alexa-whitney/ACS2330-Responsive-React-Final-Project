import React from 'react';
import './Title.css'
import { NavLink } from 'react-router-dom'
import RandomBook from '../RandomBook/RandomBook'

function Title() {
  return (
    <section className="Title">
      <header>
        <h1>
          <div class="logo">
            <b>the be<span>g</span>uil<span>i</span>ng bookshelf</b>
          </div>
        </h1>
        <nav class="navbar-nav" aria-label="Main">
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/" aria-label="Go to Book List">Book List
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/about" aria-label="Go to About Page">About
          </NavLink>
          <RandomBook class="random-book" />
        </nav>
      </header>
    </section>
  )
}

export default Title;