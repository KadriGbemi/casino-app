import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';

import App from './App';

describe("'Unit testing of BitCasino's (User Interface) components and it's properties'", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
