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
  componentDidUpdate(prevState) {
    if (this.state.priceListRequest !== prevState.priceListRequest) {
      localStorage.setItem(
        'priceListRequest',
        JSON.stringify(this.state.priceListRequest)
      );
    }
  }
  componentDidMount() {
    this.setState({
      priceListRequest: JSON.parse(localStorage.getItem('priceListRequest'))
        ? JSON.parse(localStorage.getItem('priceListRequest'))
        : []
    });
  }
  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  onAddButtonClick = e => {
    this.setState({
      priceListRequest: (JSON.parse(localStorage.getItem('priceListRequest'))
        ? JSON.parse(localStorage.getItem('priceListRequest'))
        : []
      ).concat(this.state.input)
    });
    e.preventDefault();
  };
  onDeleteButtonClick = (item, e) => {
    this.setState({
      priceListRequest: JSON.parse(
        localStorage.getItem('priceListRequest')
      ).filter(request => item !== request)
    });
    e.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="App-content-info">
            <div className="App-content-info-container">
            <img src={Logo} alt="logo" />
              <Typography
                variant="h4"
                gutterBottom
                style={{ width: '100%', marginTop: '15%' }}
              >
                Now you can track all your cryptos here!
              </Typography>
              <p className="App-content-info-paragraph">
                Just enter the cryptocurrency code on the form to the right
              </p>
              <p className="App-content-info-mobile">
                Just enter the cryptocurrency code on the form below
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
