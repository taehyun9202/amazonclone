import React from 'react'
import './Contents.css'
import Product from './Product';

function Contents() {
    return (
        <div className="body">
            <div className="content">
                <img className="bgimage" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/DER_BestSellersReading_DesktopHero_1500x600_EN._CB404900571_.jpg" />
                <div className="row">
                    <Product
                        id={1}
                        title="Samsung QN82Q900RBFXZA Flat Screen 82-Inch QLED 8K Q900 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
                        price={5599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/9164elyDY5L._AC_SL1500_.jpg"
                        rating={4.5}
                    />
                </div>
                <div className="row">
                    <Product
                        id={2}
                        title="Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera"
                        price={37.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/31dz6wCIWML._AC_.jpg"
                        rating={4.4}
                    />
                    <Product
                        id={3}
                        title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera"
                        price={25.98}
                        image="https://images-na.ssl-images-amazon.com/images/I/61B04f0ALWL._AC_SL1500_.jpg"
                        rating={4.3}
                    />
                    <Product
                        id={4}
                        title="WiFi Camera Indoor, Goowls Home Security Pet Dog PTZ 2.4GHz 1080P Wireless"
                        price={25.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/616dmkwOMnL._AC_SL1500_.jpg"
                        rating={3.6}
                    />
                </div>
                <div className="row">
                    <Product
                        id={5}
                        title="Echo Dot (3rd Gen) Kids Edition, an Echo designed for kids with parental controls - Blue"
                        price={34.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61dsbjR7iOL._AC_SL1000_.jpg"
                        rating={4.7}
                    />
                    <Product
                        id={6}
                        title="Nebula Capsule, by Anker, Smart Wi-Fi Mini Projector, Red"
                        price={319.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81JlnuyARiL._AC_SX425_.jpg"
                        rating={4.5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contents
