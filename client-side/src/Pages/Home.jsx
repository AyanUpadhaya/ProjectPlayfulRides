import React from 'react';
import Banner from '../Components/Banner';
import ImageGallery from '../Components/ImageGallery';
import Trending from '../Components/Trending';
import ShopByCategory from '../Components/ShopByCategory';
import Seller from '../Components/Seller';
import useTitle from '../CustomHooks/useTitle';

const Home = () => {
    useTitle('PlayfulRides | Home')
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
            <Trending></Trending>
            <Seller></Seller>
        </div>
    );
};

export default Home;