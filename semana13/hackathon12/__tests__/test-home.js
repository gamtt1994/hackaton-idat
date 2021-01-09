import React from 'react';
import {shallow} from 'enzyme';
import Home, {styles} from '../screen/Home';

describe('Redering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('exists render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Testing Text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('Testing View', () => {
    expect(wrapper.find('View')).toHaveLength(4);
  });

  it('Testing style Text', () => {
    expect(wrapper.find('Text').prop('style')).toEqual(styles.title);
  });

  it('Should match Text snapshot', () => {
    expect(wrapper.find('Text')).toMatchSnapshot();
  });

  it('Should match View snapshot', () => {
    expect(wrapper.find('View')).toMatchSnapshot();
  });
});
