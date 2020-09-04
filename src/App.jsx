import React, { Component } from "react";
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
      priceList: JSON.parse(localStorage.getItem("priceList")) || [],
      errorMessage: "",
      id: JSON.parse(localStorage.getItem("id")) || 0,
    };
  }

  componentDidUpdate(prevState) {
    const { priceList } = this.state;
    if (priceList !== prevState.priceList) {
      localStorage.setItem("priceList", JSON.stringify(priceList));
    }
  }

  onDeleteButtonClick(id) {
    this.setState((previousState) => ({
      priceList: previousState.priceList.filter((request) => id !== request.id),
    }));
  }

  onAddButtonClick() {
    const { input } = this.state;
    this.getPriceListRequest(input);
  }

  getPriceListRequest(input) {
    getCryptoPriceList(input).then((response) => {
      if (response.Response) {
        return this.setState({
          errorMessage:
            "Oops! No data available try again or use uppercase letters like (e.g. BTC, NMC).",
          priceList: [],
        });
      }
      const { id } = this.state;
      const getResponse = Object.assign(response, { id: id + 1 });
      localStorage.setItem("id", JSON.stringify(getResponse.id));
      return this.setState((previousState) => ({
        id: getResponse.id,
        priceList: previousState.priceList.concat(getResponse),
      }));
    });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { errorMessage, priceList } = this.state;
    return (
      <div className="App">
        <div className="App-layout">
          <div className="App-content">
            <div className="App-content-info">
              <LayoutTextComponent />
              <GetCryptoPriceList
                priceList={priceList}
                handleDeleteButtonClick={(e) => this.onDeleteButtonClick(e)}
                errorMessage={errorMessage}
              />
            </div>
            <div className="App-content-center">
              <img src={Figure} alt="clown figure" />
            </div>
            <div className="App-content-form">
              <TextInputFormComponent
                handleAddButtonClick={(e) => this.onAddButtonClick(e)}
                handleTextFieldChange={(e) => this.handleChange(e)}
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
