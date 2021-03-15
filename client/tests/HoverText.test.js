import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HoverText from '../components/HoverText.jsx';

describe('<HoverText />', () => {
  const wrapperContent = shallow(
    <HoverText
      effect="content"
      text="test"
      regColor="#f5f5f5"
      hoveredColor="#e1ad01"
    />
  );
  it('renders StyledContent if effect is content', () => {
    expect(wrapperContent.find('StyledContent')).toHaveLength(1);
    expect(wrapperContent.find('StyledBackground')).toHaveLength(0);
  });
  const wrapperBackground = shallow(
    <HoverText
      effect="background"
      text="test"
      regColor="#f5f5f5"
      hoveredColor="#e1ad01"
    />
  );
  it('renders StyledBackground if effect is background', () => {
    expect(wrapperBackground.find('StyledBackground')).toHaveLength(1);
    expect(wrapperBackground.find('StyledContent')).toHaveLength(0);
  });
});