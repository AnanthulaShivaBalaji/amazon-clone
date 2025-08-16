import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <img
          className="Home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Banner"
        />
        
        <div className="Home__row">
          <Product 
            id="744803"
            title="Samsung FHD Smart TV "
            image="https://m.media-amazon.com/images/I/71ax3phCOVL._SL1500_.jpg"
            price={25490}
            rating={4}
          />
          <Product 
            id="744804"
            title="Crystal 4K Vivid Pro"
            image="https://m.media-amazon.com/images/I/81OmhFfS-hL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
            price={32990}
            rating={4}
          />
          <Product 
            id="744810"
            title="Royal Enfield Continental GT 650"
            image="https://ic1.maxabout.us/autos/tw_india/R/2021/3/royal-enfield-cgt-650-rocker-red.jpg"
            price={455678}
            rating={5}
          />
          <Product 
            id="744810"
            title="Royal Enfield Continental GT 650"
            image="https://ic1.maxabout.us/autos/tw_india/R/2021/3/royal-enfield-cgt-650-rocker-red.jpg"
            price={455678}
            rating={5}
          />
        </div>
        
        <div className="Home__row">
          
          <Product 
            id="744805"
            title="Samsung Ultra HD"
            image="https://m.media-amazon.com/images/I/81nikv9C6lL._SL1500_.jpg"
            price={30990}
            rating={4}
          />
          <Product 
            id="744806"
            title="Onida Smart TV"
            image="https://m.media-amazon.com/images/I/81Pfr6zsLOL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
            price={17999}
            rating={4}
          />
          <Product 
            id="744807"
            title="VW Smart TV"
            image="https://m.media-amazon.com/images/I/81Vh6xPNA-L._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
            price={12999}
            rating={3}
          />
        </div>
        
        <div className="Home__row">
          <Product 
            id="744808"
            title="KTM 250 Duke Bike Ebony Black (Matt)"
            image="https://m.media-amazon.com/images/I/81Bdg2E1LFL._SX450_.jpg"
            price={223990}
            rating={4}
          />
          <Product 
            id="744809"
            title="KTM RC 200 Bike Blue"
            image="https://m.media-amazon.com/images/I/61st4460pGL._SX450_.jpg"
            price={229990}
            rating={5}
          />
          <Product 
            id="744810"
            title="Royal Enfield Continental GT 650"
            image="https://ic1.maxabout.us/autos/tw_india/R/2021/3/royal-enfield-cgt-650-rocker-red.jpg"
            price={455678}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
