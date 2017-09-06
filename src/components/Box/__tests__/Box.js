import React    from 'react';
import renderer from 'react-test-renderer';
import Box      from '../Box';

test('Renders Box component', () => {
  const component = renderer.create(
    <Box />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders Box component with passed children', () => {
  const component = renderer.create(
    <Box>
      <p>Hi!</p>
    </Box>
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders Box component with passed children and isBordered modifier', () => {
  const component = renderer.create(
    <Box isBordered>
      <p>Hi!</p>
    </Box>
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders Box component with passed children and isBig modifier', () => {
  const component = renderer.create(
    <Box isBig>
      <p>Hi!</p>
    </Box>
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders Box component with passed children and isSuccess modifier', () => {
  const component = renderer.create(
    <Box isSuccess>
      <p>Hi!</p>
    </Box>
  ).toJSON();
  expect(component).toMatchSnapshot();
});

