
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Button from '.';

it(`renders a primary colored button correctly`, () => {
  const tree = renderer.create(<Button text="Some Text" color="primary" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`renders a rounded primary colored button correctly`, () => {
  const tree = renderer.create(<Button text="Some Text" color="primary" variant="rounded" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`renders a rounded primary colored button with a shadow correctly`, () => {
  const tree = renderer.create(<Button text="Some Text" color="primary" variant="rounded" modifier="shadow" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`renders a button if 'as' parameter is not provided`, () => {
  const { getByTestId } = render(<Button text="Some Text" color="primary" variant="rounded" modifier="shadow" />);
  expect(getByTestId('button')).toBeTruthy();
});

it(`renders a link if 'as' parameter is 'a'`, () => {
  const { getByTestId } = render(<Button text="Some Text" color="primary" variant="rounded" modifier="shadow" as="a" />);
  expect(getByTestId('link')).toBeTruthy();
});
