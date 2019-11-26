import React from 'react';
import Typography from '@material-ui/core/Typography';

import Logo from '../../assets/logo.svg';

export default function LayoutTextComponent() {
  return (
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
  );
}
