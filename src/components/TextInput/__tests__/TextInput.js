import React     from 'react';
import renderer  from 'react-test-renderer';
import TextInput from '../TextInput';

test('Renders TextInput component', () => {
  const component = renderer.create(
    <TextInput />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders TextInput component with passed placeholder prop', () => {
  const component = renderer.create(
    <TextInput placeholder = "First Name" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
