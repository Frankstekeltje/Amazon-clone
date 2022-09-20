import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://m.media-amazon.com/images/I/71-T2GQdxQL._SX3000_.jpg" alt="" /> 

            <div className="home__row">
                <Product id={1} title={'The lean startup'} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"} rating={3}/>
                <Product id={2} title={'Macbook Air'} price={1159.93} image={"https://m.media-amazon.com/images/I/71fMZDz2sEL._AC_SL1500_.jpg"} rating={4}/>
            </div>  

            <div className="home__row">
                <Product id={3} title={'Dualshock 4 controller'} price={59.99} image={"https://m.media-amazon.com/images/I/81L9+4dTIgL._SL1500_.jpg"} rating={5}/>
                <Product id={4} title={'Royal Kludge rk81'} price={69.99} image={"https://m.media-amazon.com/images/I/61vAUrxGmZL._AC_SL1500_.jpg"} rating={4}/>
                <Product id={5} title={'Samsung 34-inch Class Ultrawide Monitor with 21:9 Wide Screen, S34J552WQNXZA (Renewed) '} price={299.99} image={"https://m.media-amazon.com/images/I/91g-Y1B09EL._AC_SL1500_.jpg"} rating={4}/>
            </div>

            <div className="home__row">
                <Product id={6} title={'SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 256GB, 8K Camera & Video, Brightest Display Screen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black'} price={799.99} image={"https://m.media-amazon.com/images/I/81Ulnpn3ZpL._AC_SL1500_.jpg"} rating={5}/> 
            </div>
        </div> 
    </div>
  )
}

export default Home  