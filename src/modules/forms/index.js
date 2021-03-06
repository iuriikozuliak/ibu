import omit from 'lodash/omit';

export const INIT_FORM = 'app/forms/INIT_FORM';
export const SET_VALUE = 'app/forms/SET_VALUE';
export const SET_ERROR = 'app/forms/SET_ERROR';

const initialState = {};

const actions = {
  [INIT_FORM]: (state, { payload: { id, initialValues }}) => ({
    ...state,
    [id]: {
      isInitialized: true,
      values: initialValues
    }
  }),
  [SET_VALUE]: (state, { payload: { id, name, value }}) => ({
    ...state,
    [id]: {
      ...state[id],
      values: {
        ...state[id].values,
        [name]: value
      }
    }
  }),
  [SET_ERROR]: (state, { payload: { id, name, error }}) => ({
    ...state,
    [id]: {
      ...state[id],
      errors: (error
        ? ({ ...state[id].errors, [name]: error })
        : (omit(state[id].errors, name)))
    }
  })
};

export function initForm({ id, initialValues }) {
  return {
    type: INIT_FORM,
    payload: { id, initialValues }
  };
}

export function setValue({ id, name, value }) {
  return {
    type: SET_VALUE,
    payload: { id, name, value }
  };
}

export function setError({ id, name, error }) {
  return {
    type: SET_ERROR,
    payload: { id, name, error }
  };
}


export default function formReducer(state = initialState, action = {}) {
  const handler = actions[action.type];
  return handler ? handler(state, action) : state;
}
