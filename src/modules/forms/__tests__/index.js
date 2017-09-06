import reducer, {
  INIT_FORM,
  SET_VALUE,
  SET_ERROR,
  setValue,
  setError,
  initForm
} from '../index';

const id            = 'FORM-ID';
const initialValues = { name: 'John Doe' };

describe('Forms actions creators', () => {
  it('should create an init action', () => {
    const expectedAction = {
      type: INIT_FORM,
      payload: {
        id,
        initialValues
      }
    };
    expect(
      initForm({ id, initialValues})
    ).toEqual(expectedAction);
  });

  it('should create a setValue action', () => {
    const payload = {
      id,
      name: 'name',
      value: 'John'
    };
    const expectedAction = {
      type: SET_VALUE,
      payload
    };
    expect(
      setValue(payload)
    ).toEqual(expectedAction);
  });

  it('should create a setError action', () => {
    const payload = {
      id,
      name: 'name',
      error: 'Required'
    };
    const expectedAction = {
      type: SET_ERROR,
      payload
    };
    expect(
      setError(payload)
    ).toEqual(expectedAction);
  });
});

describe('Forms reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });

  it('should handle INIT_FORM', () => {
    expect(
      reducer(undefined, initForm({ id, initialValues }))
    ).toEqual({
      [id]: {
        isInitialized: true,
        values: initialValues
      }
    });
  });

  it('should handle SET_VALUE', () => {
    expect(
      reducer({ [id]: { values: initialValues }}, setValue({ id, name: 'name', value: 'John' }))
    ).toEqual({
      [id]: {
        values: {
          name: 'John'
        }
      }
    });
  });

  it('should handle SET_ERROR', () => {
    expect(
      reducer({ [id]: { values: initialValues }}, setError({ id, name: 'name', error: 'Required' }))
    ).toEqual({
      [id]: {
        values: {
          name: 'John Doe'
        },
        errors: {
          name: 'Required'
        }
      }
    });
  });

  it('should remove error from errors object if it\'s empty', () => {
    expect(
      reducer(
        { [id]: { values: initialValues, errors: { name: 'Required' } }},
        setError({ id, name: 'name', error: '' })
      )
    ).toEqual({
      [id]: {
        values: {
          name: 'John Doe'
        },
        errors: {}
      }
    });
  });
});
