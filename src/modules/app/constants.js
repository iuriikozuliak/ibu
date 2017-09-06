// It's a pretty simple approach, but suitable for the current task scope.
// In general, even a few nested if statements wourld work fine as well, but if it gets
// any more complicated with more rules and conditions, something
// more sophisticated, like decision table, would be required.

export const FORM_ID = 'QUOTE_FORM';

export const MIN_AGE = 18;
export const MAX_AGE = 69;
export const CURRENCY = '$';

export const AGE_GROUPS = {
  ADULT: 'ADULT',
  SENIOR: 'SENIOR',
  OLDER: 'OLDER'
};

export const TRIP_GROUPS = {
  SHORT: 'SHORT',
  MEDIUM: 'MEDIUM',
  LONG: 'LONG',
  EXTENDED: 'EXTENDED'
};

export const AGE_MAP = {
  49: AGE_GROUPS.ADULT,
  59: AGE_GROUPS.SENIOR,
  [MAX_AGE]: AGE_GROUPS.OLDER
};

export const TRIP_LENGTH_MAP = {
  7: 'SHORT',
  14: 'MEDIUM',
  21: 'LONG',
  [Number.MAX_VALUE]: 'EXTENDED'
};

export const PRICE_MAP = {
  [AGE_GROUPS.ADULT]: {
    [TRIP_GROUPS.SHORT]: 50,
    [TRIP_GROUPS.MEDIUM]: 60,
    [TRIP_GROUPS.LONG]: 70,
    [TRIP_GROUPS.EXTENDED]: 82
  },
  [AGE_GROUPS.SENIOR]: {
    [TRIP_GROUPS.SHORT]: 60,
    [TRIP_GROUPS.MEDIUM]: 73,
    [TRIP_GROUPS.LONG]: 80,
    [TRIP_GROUPS.EXTENDED]: 90
  },
  [AGE_GROUPS.OLDER]: {
    [TRIP_GROUPS.SHORT]: 70,
    [TRIP_GROUPS.MEDIUM]: 80,
    [TRIP_GROUPS.LONG]: 90,
    [TRIP_GROUPS.EXTENDED]: 100
  }
};
