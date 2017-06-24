import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Root from './Root';
import Launch from './routes/Launch/Launch';
import Search from './routes/Search/Search';
import TabBar from './common/TabBar/TabBar';

describe('Root', () => {
  it('should render Launch before Tab component', () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.find(Launch).length).to.equal(1);
    expect(wrapper.find(TabBar).length).to.equal(0);

    wrapper.setState({ loading: false });

    expect(wrapper.find(Launch).length).to.equal(0);
    expect(wrapper.find(TabBar).length).to.equal(1);
  });

  it('should render child component', () => {
    const wrapper = shallow(<Root><Search /></Root>);

    wrapper.setState({ loading: false });

    expect(wrapper.find(Search).length).to.equal(1);
  });
});
