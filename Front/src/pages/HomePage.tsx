import React from 'react';
import Carosel from '../components/Carosel';

const HomePage: React.FC = () => {
    return (
        <div>
        <h1>Welcome to Home Page</h1>
        <Carosel width={500} />
        </div>
    );
};

export default HomePage;