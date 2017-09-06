import React      from 'react';
import TextInput  from 'components/TextInput';
import Datepicker from 'components/Datepicker';
import Flexbox    from 'components/Flexbox';
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
    <Flexbox>
      <Datepicker
        startDate = { values.startDate }
        endDate   = { values.endDate }
        onChange  = { onChange }
        name      = "date" />
      <TextInput
        type        = "number"
        value       = { values.age }
        error       = { errors.age }
        placeholder = "Age of traveller"
        onChange    = { onChange }
        name        = "age" />
    </Flexbox>
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
