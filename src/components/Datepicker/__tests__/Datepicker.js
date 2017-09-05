import React       from 'react';
import renderer    from 'react-test-renderer';
import moment      from 'moment';
import { mount } from 'enzyme';

import Datepicker from '../Datepicker';

test('Renders Datepicker component', () => {
  const component = renderer.create(
    <Datepicker />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Renders Datepicker component with start and end dates', () => {
  const component = renderer.create(
    <Datepicker
      startDate = { moment('1995-12-25') }
      endDate   = { moment('1995-12-30') } />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Triggers onChange event on onDatesChange with correct payload', () => {
  let payload;
  const expectedPayload = [{
    name: 'startDate',
    value: moment('1995-12-25')
  }, {
    name: 'endDate',
    value: null
  }];
  const component = mount(
    <Datepicker
      startDate = { moment('1995-12-25') }
      endDate   = { null }
      onChange  = { v => payload = v } />
  );

  component.find('#startDate').simulate('change');
  component.find('#endDate').simulate('change');
  expect(payload).toEqual(expectedPayload);
});
