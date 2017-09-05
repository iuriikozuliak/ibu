import React     from 'react';
import Card      from 'components/Card';
import TextInput from 'components/TextInput';

import styles from './App.css';

const App = () => (
  <div className = { styles.App }>
    <Card>
      <h2>Yay</h2>
      <TextInput placeholder = "Age of traveller" />
    </Card>
  </div>
);

export default App;
