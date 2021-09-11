import React from 'react';
import './coin.css';
const Coin = ({ name, image, symbol, price, volume, priceChange24h, priceChange7d, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">
                        {symbol}
                    </p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange24h < 0 ? (
                        <p className="coin-percent red">{priceChange24h.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange24h.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap"> MarketCap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Coin;