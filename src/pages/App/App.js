import React         from 'react';
import Card          from 'components/Card';
import InsuranceForm from 'containers/InsuranceFormContainer';
import InsurancePrice from 'containers/InsurancePriceContainer';

import styles from './App.css';

const App = () => (
  <div className = { styles.App }>
    <Card>
      <h2>Travel Insurance</h2>
      <InsuranceForm />
      <InsurancePrice />
    </Card>
  </div>
);

export default App;
