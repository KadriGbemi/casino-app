import React from 'react';
import TextInputFormComponent from './components/form/textInput';
import Figure from './assets/figure.png';
import Logo from './assets/logo.svg';
import Typography from '@material-ui/core/Typography';
import './App.scss';
import GetCryptoPriceList from './components/list/getCryptoPrice';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-content-details">
          <img src={Logo} alt="logo" />
          <div>
            <Typography variant="h4" gutterBottom style={{width: '130%'}}>
              Now you can track all your cryptos here!
            </Typography>
            <p className="App-content-sub-details">Just enter the cryptocurrency code on the form to the right</p>
          </div>
          <GetCryptoPriceList />
        </div>
        <div className="App-content-center">
          <img src={Figure} alt="clown figure" />
        </div>
        <div className="App-content-form">
          <TextInputFormComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
