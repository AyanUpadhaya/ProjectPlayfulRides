import React from 'react';
import Navigation from './Navigation';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <div>
            <TopHeader/>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;