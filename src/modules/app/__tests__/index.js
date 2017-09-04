import reducer, {
  INIT_APP,
  initApp
} from '../index';

describe('App actions creators', () => {
  it('should create an init action', () => {
    const expectedAction = {
      type: INIT_APP
    };
    expect(initApp()).toEqual(expectedAction);
  });
});

describe('App reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isInitialized: false
    });
  });

  it('should handle EDIT_CARD', () => {
    expect(
      reducer(undefined, initApp())
    ).toEqual({
      isInitialized: true
    });
  });
});
