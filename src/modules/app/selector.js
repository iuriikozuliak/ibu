import find from 'lodash/find';

import { createSelector } from 'reselect';
import {
  AGE_MAP,
  TRIP_LENGTH_MAP,
  PRICE_MAP,
  MIN_AGE,
  MAX_AGE,
  FORM_ID
} from 'modules/app/constants';

const predicate = value => (v, k) => value <= k;
const getGroup = (groups, value) => find(groups, predicate(value));
const isFormMissing = state => !state.forms || !state.forms[FORM_ID] || !state.forms[FORM_ID].values;

const getAge = (state) => {
  if (isFormMissing(state)) {
    return null;
  }

  return state.forms[FORM_ID].values.age;
};

const getTripLength = (state) => {
  if (isFormMissing(state)) {
    return null;
  }

  const {
    startDate,
    endDate
  } = state.forms[FORM_ID].values;

  if (!startDate || !endDate) {
    return null;
  }

  return endDate.diff(startDate, 'days');
};

export const insurancePriceSelector = createSelector(
  [getAge, getTripLength],
  (age, tripLength) => {
    if (!age || !tripLength || (age < MIN_AGE || age > MAX_AGE)) {
      return null;
    }

    return PRICE_MAP[getGroup(AGE_MAP, age)][getGroup(TRIP_LENGTH_MAP, tripLength)];
  }
);
