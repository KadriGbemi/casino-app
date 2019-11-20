import React, { Component } from 'react';
import TextInputFormComponent from './components/form/textInput';
import Figure from './assets/figure.png';
import Logo from './assets/logo.svg';
import Typography from '@material-ui/core/Typography';
import './App.scss';
import GetCryptoPriceList from './components/list/getCryptoPrice';

class App extends Component {
  state = {
    input: '',
    priceListRequest: []
  };
  handleChange = e => {
    console.log('Change is entered', e.target.value);
    this.setState({ input: e.target.value });
  };
  onAddButtonClick = e => {
    this.setState(previousState => ({
      priceListRequest: [...previousState.priceListRequest, this.state.input]
    }));
    e.preventDefault();
  };
  onDeleteButtonClick = (item, e) => {
    console.log("Delete button clicked(item)", item);
    console.log("Delete button clicked", e);
    this.setState({
      priceListRequest:this.state.priceListRequest.filter(request => item !== request)
    });
    e.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="App-content-details">
            <img src={Logo} alt="logo" />
            <div>
              <Typography variant="h4" gutterBottom style={{ width: '130%' }}>
                Now you can track all your cryptos here!
              </Typography>
              <p className="App-content-sub-details">
                Just enter the cryptocurrency code on the form to the right
              </p>
            </div>
            <GetCryptoPriceList
              priceListRequest={this.state.priceListRequest}
              handleDeleteButtonClick={this.onDeleteButtonClick}
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
    );
  }
}

export default App;
