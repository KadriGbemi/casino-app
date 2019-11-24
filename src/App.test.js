import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';

import Fab from '@material-ui/core/Fab';

import App from './App';
import GetCryptoPriceList from './components/list/getCryptoPrice';
import TextInputFormComponent from './components/form/textInput';

Enzyme.configure({ adapter: new Adapter() });

describe("'App components and it's sub-components'", () => {
  it("'renders the App component and it's sub-components'", () => {
    const AppComponentWrapper = mount(<App />);
    const TextInputFormWrapper = mount(<TextInputFormComponent />);
    const GetCryptoPriceListWrapper = mount(<GetCryptoPriceList />);
    expect(AppComponentWrapper).to.have.lengthOf(1);
    expect(TextInputFormWrapper).to.have.lengthOf(1);
    expect(GetCryptoPriceListWrapper).to.have.lengthOf(1);
  });
  it('proves that App component calls ComponentDidMount;', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });
  it('proves that GetCryptoPriceList component calls ComponentDidMount;', () => {
    sinon.spy(GetCryptoPriceList.prototype, 'componentDidMount');
    const wrapper = mount(<GetCryptoPriceList />);
    expect(GetCryptoPriceList.prototype.componentDidMount).to.have.property(
      'callCount',
      1
    );
  });
  it('proves that App component calls componentDidUpdate;', () => {
    sinon.spy(App.prototype, 'componentDidUpdate');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidUpdate).to.have.property('callCount', 1);
  });
  it('proves that GetCryptoPriceList component calls componentDidUpdate;', () => {
    sinon.spy(GetCryptoPriceList.prototype, 'componentDidUpdate');
    const wrapper = mount(<GetCryptoPriceList />);
    expect(GetCryptoPriceList.prototype.componentDidUpdate).to.have.property(
      'callCount',
      1
    );
  });
  it('simulates click for the add crypto-code button in (TextInputForm) Component', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <TextInputFormComponent handleAddButtonClick={onButtonClick} />
    );
    wrapper.find(Fab).simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
