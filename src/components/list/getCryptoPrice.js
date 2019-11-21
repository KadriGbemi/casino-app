import React, { Component } from 'react';
import Icon from '../../assets/icon.svg';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import getCryptoPriceList from '../../_services/request';
import './getCryptoPrice.scss';
class GetCryptoPriceList extends Component {
  constructor(props) {
    super(props);
    this.state = { priceList: [] };
  }
  componentDidUpdate(prevProps) {
    if (this.props.priceListRequest !== prevProps.priceListRequest) {
      getCryptoPriceList(this.props.priceListRequest)
        .then(response => {
          this.setState({ priceList: response });
        })
        .catch(function(error) {
          console.log('Error', error);
        });
    }
  }
  displaySnackBarMessage = index => {
    if (index === 0) {
      return (
        <SnackbarContent
          message="Oops! No data available try again or use uppercase letters like (e.g. BTC, NMC)."
          style={{ backgroundColor: '#4e2872' }}
        />
      );
    }
  };
  render() {
    const cryptoPriceList = this.state.priceList
      ? Object.keys(this.state.priceList).map((eachPriceListItem, index) =>
          this.state.priceList[eachPriceListItem].EUR ? (
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
                  onClick={evt => {
                    this.props.handleDeleteButtonClick(eachPriceListItem, evt);
                  }}
                >
                  <CloseIcon className="crypto-priceList-container-item-close" />
                </IconButton>
              </div>
              <hr />
            </div>
          ) : (
            <div key={index}>{this.displaySnackBarMessage(index)}</div>
          )
        )
      : null;
    return <div className="crypto-priceList-container">{cryptoPriceList}</div>;
  }
}

export default GetCryptoPriceList;
