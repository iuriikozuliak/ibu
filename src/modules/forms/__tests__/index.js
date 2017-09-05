import reducer, {
  INIT_FORM,
  SET_VALUE,
  setValue,
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
    expect(initForm({ id, initialValues})).toEqual(expectedAction);
  });

  it('should create a setValue action', () => {
    const expectedAction = {
      type: SET_VALUE,
      payload: {
        id,
        name: 'name',
        value: 'John'
      }
    };
    expect(setValue({ id, name: 'name', value: 'John' })).toEqual(expectedAction);
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
        initialValues
      }
    });
  });

  it('should handle SET_VALUE', () => {
    expect(
      reducer({ [id]: { initialValues }}, setValue({ id, name: 'name', value: 'John' }))
    ).toEqual({
      [id]: {
        initialValues,
        values: {
          name: 'John'
        }
      }
    });
  });
});
