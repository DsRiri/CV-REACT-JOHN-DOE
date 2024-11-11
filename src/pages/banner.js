import React from 'react';
import './Banner.css';  
import bannerDesktop from '../assets/img/banner.jpg';
import bannerTablet from '../assets/img/banner-tablette.jpg';
import bannerMobile from '../assets/img/banner-mobile.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img 
        src={bannerDesktop} 
        alt="Banner" 
        className="banner-img"
        srcSet={`${bannerMobile} 600w, ${bannerTablet} 1024w, ${bannerDesktop} 1440w`}
        sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1440px"
      />
    </div>
  );
};

export default Banner;
