import React, { Component } from "react";
import PropTypes from "prop-types";
import Figure from "./assets/figure.png";
import TextInputFormComponent from "./components/form/textInput";
import GetCryptoPriceList from "./components/list/getCryptoPrice";
import LayoutTextComponent from "./components/text/layout";
import FooterTextComponent from "./components/text/footer";

import getCryptoPriceList from "./_services/request";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      priceListRequest: JSON.parse(localStorage.getItem("priceListRequest")) || [],
      errorMessage: "",
    };
  }

  componentDidUpdate(prevState) {
    const { priceListRequest } = this.state;
    if (priceListRequest !== prevState.priceListRequest) {
      localStorage.setItem("priceListRequest", JSON.stringify(priceListRequest));
    }
  }

  onDeleteButtonClick(item) {
    const { priceListRequest } = this.state;
    this.setState({
      priceListRequest: priceListRequest.filter((request) => item !== request),
    });
  }

  onAddButtonClick() {
    const { input } = this.state;
    this.setState((previousState) => ({
      priceListRequest: [...previousState.priceListRequest, input],
    }));
    this.getPriceListRequest();
  }

  getPriceListRequest() {
    const { priceListRequest } = this.props;
    getCryptoPriceList(priceListRequest).then((response) => {
      if (response.Response) {
        return this.setState({
          errorMessage:
            "Oops! No data available try again or use uppercase letters like (e.g. BTC, NMC).",
          // priceList: [],
        });
      }
      // return this.setState({ priceList: response });
      return response;
    });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { priceListRequest, errorMessage } = this.state;
    return (
      <div className="App">
        <div className="App-layout">
          <div className="App-content">
            <div className="App-content-info">
              <LayoutTextComponent />
              <GetCryptoPriceList
                priceListRequest={priceListRequest}
                handleDeleteButtonClick={this.onDeleteButtonClick}
                errorMessage={errorMessage}
              />
            </div>
            <div className="App-content-center">
              <img src={Figure} alt="clown figure" />
            </div>
            <div className="App-content-form">
              <TextInputFormComponent
                handleAddButtonClick={this.onAddButtonClick}
                handleTextFieldChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <FooterTextComponent />
      </div>
    );
  }
}
export default App;

App.propTypes = {
  priceListRequest: PropTypes.string,
};

App.defaultProps = {
  priceListRequest: "",
};
