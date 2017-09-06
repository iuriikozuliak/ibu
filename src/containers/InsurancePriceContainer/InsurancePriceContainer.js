import React       from 'react';
import { connect } from 'react-redux';

import {
  insurancePriceSelector
} from 'modules/app/selector';

const InsurancePriceContainer = ({ price }) => (
  <div>
    Price: { price }
  </div>
);

export default connect(state => ({
  price: insurancePriceSelector(state)
}))(InsurancePriceContainer);
