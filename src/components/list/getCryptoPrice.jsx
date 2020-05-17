import React, { Component } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "../../assets/icon.svg";

import "./getCryptoPrice.scss";

class GetCryptoPriceList extends Component {
  constructor(props) {
    super(props);
    this.state = { priceList: [] };
  }

  displaySnackBarMessage = () => {
    const { errorMessage } = this.props;
    return (
      <SnackbarContent
        message={errorMessage}
        style={{ backgroundColor: "#4e2872" }}
        className="crypto-priceList-container-item"
      />
    );
  };

  render() {
    const { errorMessage, handleDeleteButtonClick } = this.props;
    const { priceList } = this.state;
    const cryptoPriceList =
      errorMessage && priceList.length === 0
        ? this.displaySnackBarMessage()
        : Object.entries(priceList).map((objectKey, eachPriceListItem) => (
            <div key={objectKey}>
              <div className="crypto-priceList-container-item">
                <img src={Icon} alt="icon" />
                <div className="crypto-priceList-container-item-col">
                  <Typography variant="subtitle2" gutterBottom>
                    {eachPriceListItem}
                  </Typography>
                  <p className="App-content-sub-details">
                    {priceList[eachPriceListItem].EUR} €
                  </p>
                </div>
                <IconButton
                  onClick={(evt) => {
                    handleDeleteButtonClick(eachPriceListItem, evt);
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

GetCryptoPriceList.propTypes = {
  errorMessage: PropTypes.string,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};

GetCryptoPriceList.defaultProps = {
  errorMessage: "",
};
