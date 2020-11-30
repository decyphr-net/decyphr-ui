
import React from 'react';
import Button from '../micro/Button/Button';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer.create(<Button text="Some Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
