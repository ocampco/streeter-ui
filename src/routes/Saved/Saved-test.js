import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Saved from './Saved';
import styles from './Saved.scss';

describe('Saved', () => {
  it('should render styles', () => {
    const wrapper = shallow(<Saved />);

    expect(wrapper.find(`.${styles.header}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.pane}`).length).to.equal(1);
  });
});
