import React    from 'react';
import renderer from 'react-test-renderer';
import Card     from '../Card';

test('Renders Card component', () => {
  const component = renderer.create(
    <Card />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders Card component with passed children', () => {
  const component = renderer.create(
    <Card>  
      <h2>Card Title</h2>
    </Card>
  ).toJSON();
  expect(component).toMatchSnapshot();
});
