import React         from 'react';
import Card          from 'components/Card';
import InsuranceForm from 'containers/InsuranceFormContainer';

import styles from './App.css';

const App = () => (
  <div className = { styles.App }>
    <Card>
      <h2>Yay</h2>
      <InsuranceForm />
    </Card>
  </div>
);

export default App;
