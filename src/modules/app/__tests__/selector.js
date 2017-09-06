import moment from 'moment';
import {
  // AGE_MAP,
  // TRIP_LENGTH_MAP,
  // PRICE_MAP,
  FORM_ID
} from 'modules/app/constants';

import {
  insurancePriceSelector
} from '../selector';

const date = '1995-03-01';
const getFormState = (age, tripLength) => ({
  forms: {
    [FORM_ID]: {
      values: {
        age,
        startDate: moment(date),
        endDate: moment(date).add(tripLength, 'days')
      }
    }
  }
});

describe('Insurance price selector', () => {
  // ADULT
  it('should return null if age is not in MIN/MAX_AGE range', () => {
    expect(insurancePriceSelector(getFormState(100, 7))).toEqual(null);
    expect(insurancePriceSelector(getFormState(15, 7))).toEqual(null);
  });

  it('should return 50 for ADULT age group and short trip duration', () => {
    expect(insurancePriceSelector(getFormState(18, 1))).toEqual(50);
    expect(insurancePriceSelector(getFormState(49, 7))).toEqual(50);
    expect(insurancePriceSelector(getFormState(20, 5))).toEqual(50);
  });

  it('should return 60 for ADULT age group and medium trip duration', () => {
    expect(insurancePriceSelector(getFormState(18, 8))).toEqual(60);
    expect(insurancePriceSelector(getFormState(18, 14))).toEqual(60);
    expect(insurancePriceSelector(getFormState(18, 10))).toEqual(60);
  });

  it('should return 70 for ADULT age group and long trip duration', () => {
    expect(insurancePriceSelector(getFormState(18, 15))).toEqual(70);
    expect(insurancePriceSelector(getFormState(18, 21))).toEqual(70);
    expect(insurancePriceSelector(getFormState(18, 17))).toEqual(70);
  });

  it('should return 70 for ADULT age group and extended trip duration', () => {
    expect(insurancePriceSelector(getFormState(18, 22))).toEqual(82);
    expect(insurancePriceSelector(getFormState(18, 120))).toEqual(82);
    expect(insurancePriceSelector(getFormState(18, 150000))).toEqual(82);
  });

  // SENIOR
  it('should return 60 for SENIOR age group and short trip duration', () => {
    expect(insurancePriceSelector(getFormState(50, 1))).toEqual(60);
    expect(insurancePriceSelector(getFormState(59, 7))).toEqual(60);
    expect(insurancePriceSelector(getFormState(52, 5))).toEqual(60);
  });

  it('should return 73 for SENIOR age group and medium trip duration', () => {
    expect(insurancePriceSelector(getFormState(52, 8))).toEqual(73);
    expect(insurancePriceSelector(getFormState(52, 14))).toEqual(73);
    expect(insurancePriceSelector(getFormState(52, 10))).toEqual(73);
  });

  it('should return 80 for SENIOR age group and long trip duration', () => {
    expect(insurancePriceSelector(getFormState(52, 15))).toEqual(80);
    expect(insurancePriceSelector(getFormState(52, 21))).toEqual(80);
    expect(insurancePriceSelector(getFormState(52, 17))).toEqual(80);
  });

  it('should return 80 for SENIOR age group and long trip duration', () => {
    expect(insurancePriceSelector(getFormState(52, 22))).toEqual(90);
    expect(insurancePriceSelector(getFormState(52, 541))).toEqual(90);
    expect(insurancePriceSelector(getFormState(52, 321897))).toEqual(90);
  });

  // OLDER
  it('should return 70 for OLDER age group and short trip duration', () => {
    expect(insurancePriceSelector(getFormState(60, 1))).toEqual(70);
    expect(insurancePriceSelector(getFormState(69, 7))).toEqual(70);
    expect(insurancePriceSelector(getFormState(62, 5))).toEqual(70);
  });

  it('should return 80 for OLDER age group and medium trip duration', () => {
    expect(insurancePriceSelector(getFormState(62, 8))).toEqual(80);
    expect(insurancePriceSelector(getFormState(62, 14))).toEqual(80);
    expect(insurancePriceSelector(getFormState(62, 10))).toEqual(80);
  });

  it('should return 90 for OLDER age group and long trip duration', () => {
    expect(insurancePriceSelector(getFormState(62, 15))).toEqual(90);
    expect(insurancePriceSelector(getFormState(62, 21))).toEqual(90);
    expect(insurancePriceSelector(getFormState(62, 17))).toEqual(90);
  });

  it('should return 100 for OLDER age group and long trip duration', () => {
    expect(insurancePriceSelector(getFormState(62, 22))).toEqual(100);
    expect(insurancePriceSelector(getFormState(62, 541))).toEqual(100);
    expect(insurancePriceSelector(getFormState(62, 321897))).toEqual(100);
  });
});
