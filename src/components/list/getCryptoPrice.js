import React from 'react';
import Icon from '../../assets/icon.svg';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './getCryptoPrice.scss';

export default function GetCryptoPriceList() {
  return (
    <div className="crypto-priceList-container">
      <div className="crypto-priceList-container-item">
        <img src={Icon} alt="icon" />
        <div className="crypto-priceList-container-item-col">
          <Typography variant="subtitle2" gutterBottom>
            BTC
          </Typography>
          <p className="App-content-sub-details">7842.27 €</p>
        </div>
        <CloseIcon className="crypto-priceList-container-item-close" />
      </div>
      <hr />
      <div className="crypto-priceList-container-item">
        <img src={Icon} alt="icon" />
        <div className="crypto-priceList-container-item-col">
        <Typography variant="subtitle2" gutterBottom>
            LTC
          </Typography>
          <p className="App-content-sub-details">7842.27 €</p>
        </div>
        <CloseIcon className="crypto-priceList-container-item-close" />
      </div>
      <hr />
      <div className="crypto-priceList-container-item">
        <img src={Icon} alt="icon" />
        <div className="crypto-priceList-container-item-col">
        <Typography variant="subtitle2" gutterBottom>
            XMR
          </Typography>
          <p className="App-content-sub-details">7842.27 €</p>
        </div>
        <CloseIcon className="crypto-priceList-container-item-close" />
      </div>
      <hr />
    </div>
  );
}
