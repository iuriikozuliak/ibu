import React     from 'react';
import Card      from 'components/Card';
import TextInput from 'components/TextInput';
import withForm  from 'hoc/withForm';

import styles from './App.css';

const Form = ({ values }) => (
  <form>
    <TextInput
      value       = { values.age }
      placeholder = "Age of traveller" />
  </form>
);

const ConnectedForm = withForm(Form, {
  id: 'QUOTE-FORM',
  initialValues: {
    age: '16'
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
