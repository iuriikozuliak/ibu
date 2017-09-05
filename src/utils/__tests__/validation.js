import {
  required,
  inRange,
  getErrors
} from '../validation.js';

describe('Required validation rule', () => {
  test('Returns error message if value is empty', () => {
    expect(required('')).toEqual('Required');
    expect(required(0)).toEqual('Required');
    expect(required(null)).toEqual('Required');
    expect(required(undefined)).toEqual('Required');
  });

  test('Returns empty error message if value is present', () => {
    expect(required('John Doe')).toEqual(undefined);
    expect(required('123')).toEqual(undefined);
    expect(required(123)).toEqual(undefined);
  });
});

describe('InRange validation rule', () => {
  const rule = inRange(10, 20);

  test('Returns error message if value is not in range', () => {
    expect(rule('')).toEqual('Must be in range between 10 and 20');
    expect(rule(null)).toEqual('Must be in range between 10 and 20');
    expect(rule(2)).toEqual('Must be in range between 10 and 20');
    expect(rule(0)).toEqual('Must be in range between 10 and 20');
    expect(rule(21)).toEqual('Must be in range between 10 and 20');
  });

  test('Returns empty message if value is in range', () => {
    expect(rule(10)).toEqual(undefined);
    expect(rule(15)).toEqual(undefined);
    expect(rule(20)).toEqual(undefined);
    expect(rule('20')).toEqual(undefined);
  });
});

describe('getErrors helper', () => {
  const ruleset = [required, inRange(10, 20)];

  test('Returns error message if value is not present, or in range', () => {
    expect(getErrors(ruleset, '')).toEqual('Required, Must be in range between 10 and 20');
    expect(getErrors(ruleset, '30')).toEqual('Must be in range between 10 and 20');
    expect(getErrors(ruleset, 30)).toEqual('Must be in range between 10 and 20');
  });

  test('Returns empty message if value is present and in range', () => {
    expect(getErrors(ruleset, '12')).toEqual('');
    expect(getErrors(ruleset, 12)).toEqual('');
  });
});
