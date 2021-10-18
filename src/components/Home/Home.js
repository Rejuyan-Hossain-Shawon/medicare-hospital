import React from 'react';
import Services from '../Shared/Services/Services';
import Advice from './Advice/Advice';
import Banner from './Banner/Banner';
import LatestNews from './LatesNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advice></Advice>
            <Services></Services>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;