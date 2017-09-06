import React       from 'react';
import { connect } from 'react-redux';
import Box         from 'components/Box';
import {
  insurancePriceSelector,
  tripLengthSelector
} from 'modules/app/selector';
import {
  CURRENCY,
  FORM_ID
} from 'modules/app/constants';

const InsurancePriceContainer = ({
  price,
  tripLength,
  age
}) => {
  if (!price) return null;

  return (
    <Box isBordered isBig isSuccess isRounded>
      Travelling for {tripLength} with 1 traveller aged {age}. Your price is:
      <h2>{ CURRENCY }{ price }</h2>
    </Box>
  );
};

export default connect(state => ({
  price: insurancePriceSelector(state),
  tripLength: tripLengthSelector(state),
  age: state.forms[FORM_ID].values.age
}))(InsurancePriceContainer);
