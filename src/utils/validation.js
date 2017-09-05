export const required = (value) => {
  if (!value) { return 'Required'; }

  return '';
};

export const inRange = (start, end) => (value) => {
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  const number = parseInt(value, 10);

  if (!value || isNaN(value) || (number < min || number > max)) {
    return `Must be in range between ${min} and ${max}`;
  }

  return '';
};

export const getErrors = (ruleset, value) => {
  if (Array.isArray(ruleset)) {
    return ruleset.reduce((acc, curr) => {
      const error = curr(value);

      return error ? `${acc}${curr(value)}, ` : acc;
    }, '').slice(0, -2);
  }
  if (typeof ruleset === 'function') {
    return ruleset(value);
  }
};

