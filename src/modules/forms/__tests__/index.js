import reducer, {
  INIT_FORM,
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
});
