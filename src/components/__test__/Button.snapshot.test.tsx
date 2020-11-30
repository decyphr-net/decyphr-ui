
import React from 'react';
import Button from '../elements/Button';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer.create(<Button text="Some Text" color="primary" />).toJSON();
  expect(tree).toMatchSnapshot();
});
