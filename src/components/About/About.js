import React from 'react';
import './About.css';


function About() {
    return (
        <article className="about-container">
            <header>
                <h1 className="about-header">About The Begiuling Bookshelf</h1>
            </header>
            <section className="about-content">
                <p className="about-text">Welcome! Here, you'll find curated recommendations from Alexa Whitney's own library in the genres of fantasy, horror, romance, thriller/myster, historical fiction, and nonfiction. As an avid reader and lover of escaping to new worlds, I have a passion for discovering and sharing the best books on the market. Whether you're in the mood for an epic fantasy adventure, a hair-raising horror story, or a heartwarming romance, I have something for you. So, come on in, peruse my top picks, and find your next great read. Happy reading!</p>
                <p className="signature">XOXO, Alexa</p>
            </section>
            <figure>
                <img className="about-image" src="https://avatars.githubusercontent.com/u/112434021?s=400&u=65cabb3242262812e458cef60d95423fab705f5e&v=4" alt="Portrait of Alexa" />
                <figcaption className="visually-hidden">Portrait of Alexa Whitney</figcaption>
            </figure>
        </article>
    )
}


export default About;
