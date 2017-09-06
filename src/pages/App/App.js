import React          from 'react';
import Card           from 'components/Card';
import InsuranceForm  from 'containers/InsuranceFormContainer';
import InsurancePrice from 'containers/InsurancePriceContainer';

import 'normalize.css';
import styles from './App.css';

const App = () => (
  <div className = { styles.App }>
    <Card>
      <h2>Travel Insurance <span role = "img" aria-label = "plane">✈️✈️✈️</span></h2>
      <p>Please enter your age and travel start/end date to determine the price of the policy</p>
      <InsuranceForm />
      <InsurancePrice />
    </Card>
  </div>
);

export default App;
