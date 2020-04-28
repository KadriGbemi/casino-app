import React, { Component } from 'react';

import Figure from './assets/figure.png';

import TextInputFormComponent from './components/form/textInput';
import GetCryptoPriceList from './components/list/getCryptoPrice';
import LayoutTextComponent from './components/text/layout';
import FooterTextComponent from './components/text/footer';

import getCryptoPriceList from './_services/request';

import './App.scss';
class App extends Component {
  state = {
    input: '',
    priceListRequest:
      JSON.parse(localStorage.getItem('priceListRequest')) || [],
    errorMessage: ''
  };
  componentDidUpdate(prevState) {
    if (this.state.priceListRequest !== prevState.priceListRequest) {
      localStorage.setItem(
        'priceListRequest',
        JSON.stringify(this.state.priceListRequest)
      );
    }
  }
  getPriceListRequest = () => {
    getCryptoPriceList(this.props.priceListRequest).then((response) => {
      response.Response
        ? this.setState({
            errorMessage:
              'Oops! No data available try again or use uppercase letters like (e.g. BTC, NMC).',
            priceList: [],
          })
        : this.setState({ priceList: response });
    });
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  onAddButtonClick = (e) => {
    this.setState((previousState) => ({
      priceListRequest: [...previousState.priceListRequest, this.state.input],
    }));
     this.getPriceListRequest();
  };
  onDeleteButtonClick = (item, e) => {
    this.setState({
      priceListRequest: this.state.priceListRequest.filter(
        (request) => item !== request
      ),
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-layout">
          <div className="App-content">
            <div className="App-content-info">
              <LayoutTextComponent />
              <GetCryptoPriceList
                priceListRequest={this.state.priceListRequest}
                handleDeleteButtonClick={this.onDeleteButtonClick}
                errorMessage={this.state.errorMessage}
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
