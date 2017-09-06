import React      from 'react';
import TextInput  from 'components/TextInput';
import Datepicker from 'components/Datepicker';
import Box        from 'components/Box';
import withForm   from 'hoc/withForm';
import {
  required,
  inRange
} from 'utils/validation';
import {
  FORM_ID,
  MIN_AGE,
  MAX_AGE
} from 'modules/app/constants';

const validate = {
  age: [required, inRange(MIN_AGE, MAX_AGE)],
};

const Form = ({
  values,
  errors,
  onChange
}) => (
  <form>
    <p>Diff: { values.endDate && values.endDate.diff(values.startDate, 'days') }</p>
    <Box>
      <Datepicker
        startDate = { values.startDate }
        endDate   = { values.endDate }
        onChange  = { onChange }
        name      = "date" />
    </Box>
    <Box>
      <TextInput
        type        = "number"
        value       = { values.age }
        placeholder = "Age of traveller"
        onChange    = { onChange }
        name        = "age" />
      { errors.age }
    </Box>
  </form>
);

export default withForm(Form, {
  id: FORM_ID,
  validate,
  initialValues: {
    startDate: null,
    endDate: null
  }
});
