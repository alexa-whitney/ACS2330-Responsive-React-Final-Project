import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h1 className="about-header">About The Begiuling Bookshelf</h1>
            <p className="about-text">Welcome! Here, you'll find recommendations for the top ten must-read books in the genres of fantasy, horror, and romance. As an avid reader and lover of these genres, I have a passion for discovering and sharing the best books on the market. Whether you're in the mood for an epic fantasy adventure, a hair-raising horror story, or a heartwarming romance, I have something for you. So, come on in, peruse my top picks, and find your next great read. Happy reading!
                <br /><span class="signature">XOXO, Alexa</span>
            </p>
            <img className="about-image" src="https://avatars.githubusercontent.com/u/112434021?s=400&u=65cabb3242262812e458cef60d95423fab705f5e&v=4" alt="alexa" />
        </div>
    )
}

export default About;
