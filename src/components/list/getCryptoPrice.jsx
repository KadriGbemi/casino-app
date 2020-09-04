import React, { Component } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "../../assets/icon.svg";

import "./getCryptoPrice.scss";

class GetCryptoPriceList extends Component {
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
    const { errorMessage, handleDeleteButtonClick, priceList } = this.props;
    const cryptoPriceList =
      errorMessage && priceList.length === 0
        ? this.displaySnackBarMessage()
        : priceList.map((price) => {
            const keyObj = Object.keys(price);
            const priceKey = keyObj[0];
            return (
              <div key={price.id}>
                <div className="crypto-priceList-container-item">
                  <img src={Icon} alt="icon" />
                  <div className="crypto-priceList-container-item-col">
                    <Typography variant="subtitle2" gutterBottom>
                      {priceKey}
                    </Typography>
                    <p className="App-content-sub-details">
                      {price[priceKey].EUR} €
                    </p>
                  </div>
                  <IconButton
                    onClick={() => {
                      handleDeleteButtonClick(price.id);
                    }}
                  >
                    <CloseIcon className="crypto-priceList-container-item-close" />
                  </IconButton>
                </div>
                <hr />
              </div>
            );
          });
    return <div className="crypto-priceList-container">{cryptoPriceList}</div>;
  }
}

export default GetCryptoPriceList;

GetCryptoPriceList.propTypes = {
  errorMessage: PropTypes.string,
  handleDeleteButtonClick: PropTypes.func.isRequired,
  priceList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number])
  ),
};

GetCryptoPriceList.defaultProps = {
  errorMessage: "",
  priceList: [],
};
