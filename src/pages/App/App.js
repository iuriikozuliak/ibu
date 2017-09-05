import React      from 'react';
import Card       from 'components/Card';
import TextInput  from 'components/TextInput';
import Datepicker from 'components/Datepicker';
import withForm   from 'hoc/withForm';
import moment     from 'moment';

import styles from './App.css';

const Form = ({ values, onChange }) => (
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
  </form>
);

const ConnectedForm = withForm(Form, {
  id: 'QUOTE-FORM',
  initialValues: {
    age: '16',
    startDate: moment(),
    endDate: moment()
  }
});

const App = () => (
  <div className = { styles.App }>
    <Card>
      <h2>Yay</h2>
      <ConnectedForm />
    </Card>
  </div>
);

export default App;
