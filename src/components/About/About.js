import React from 'react';
import './About.css';

function About() {
    return (
        <div>
            <h1>About Alexa's Book Recommendations</h1>
            <p>Welcome to The Beguiling Bookshelf! Here, you'll find recommendations for the top ten must-read books in the genres of fantasy, horror, and romance. As an avid reader and lover of these genres, I have a passion for discovering and sharing the best books on the market. Whether you're in the mood for an epic fantasy adventure, a hair-raising horror story, or a heartwarming romance, I have something for you. So, come on in, peruse my top picks, and find your next great read. Happy reading!
            </p>
            <img className='alexa' src='https://media.licdn.com/dms/image/C4E03AQHW39pRx9OLOQ/profile-displayphoto-shrink_800_800/0/1660317254782?e=1681344000&v=beta&t=YPaO8Jf9iNBFYO2lCVBSBY54Mz8Q0gwYHfd5dsqUVps' alt='alexa' />
        </div>
    )
}

export default About;