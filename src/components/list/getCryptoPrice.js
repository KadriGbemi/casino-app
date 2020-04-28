import React, { Component } from 'react';

import Icon from '../../assets/icon.svg';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';

import './getCryptoPrice.scss';
class GetCryptoPriceList extends Component {
  constructor(props) {
    super(props);
    this.state = { priceList: [] };
  }
  displaySnackBarMessage = () => {
    return (
      <SnackbarContent
        message={this.props.errorMessage}
        style={{ backgroundColor: '#4e2872' }}
        className="crypto-priceList-container-item"
      />
    );
  };
  render() {
    const cryptoPriceList =
      this.props.errorMessage && this.state.priceList.length === 0
        ? this.displaySnackBarMessage()
        : Object.keys(this.state.priceList).map((eachPriceListItem, index) => (
            <div key={index}>
              <div className="crypto-priceList-container-item">
                <img src={Icon} alt="icon" />
                <div className="crypto-priceList-container-item-col">
                  <Typography variant="subtitle2" gutterBottom>
                    {eachPriceListItem}
                  </Typography>
                  <p className="App-content-sub-details">
                    {this.state.priceList[eachPriceListItem].EUR} €
                  </p>
                </div>
                <IconButton
                  onClick={(evt) => {
                    this.props.handleDeleteButtonClick(eachPriceListItem, evt);
                  }}
                >
                  <CloseIcon className="crypto-priceList-container-item-close" />
                </IconButton>
              </div>
              <hr />
            </div>
          ));
    return <div className="crypto-priceList-container">{cryptoPriceList}</div>;
  }
}

export default GetCryptoPriceList;
