import React      from 'react';
import moment     from 'moment';
import TextInput  from 'components/TextInput';
import Datepicker from 'components/Datepicker';
import withForm   from 'hoc/withForm';
import {
  required
} from 'utils/validation';

const validate = {
  age: required
};

const Form = ({
  values,
  errors,
  onChange
}) => (
  <form>
    <p>Diff: { values.endDate && values.endDate.diff(values.startDate, 'days') }</p>
    <Datepicker
      startDate = { values.startDate }
      endDate   = { values.endDate }
      onChange  = { onChange }
      name      = "date" />
    <TextInput
      value       = { values.age }
      placeholder = "Age of traveller"
      onChange    = { onChange }
      name        = "age" />
    { errors.age }
  </form>
);

export default withForm(Form, {
  id: 'QUOTE-FORM',
  validate,
  initialValues: {
    startDate: moment(),
    endDate: moment()
  }
});
