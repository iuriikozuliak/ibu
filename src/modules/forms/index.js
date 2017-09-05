export const INIT_FORM = 'app/INIT_FORM';
export const SET_VALUE = 'app/SET_VALUE';

const initialState = {};

const actions = {
  [INIT_FORM]: (state, { payload: { id, initialValues }}) => ({
    ...state,
    [id]: {
      isInitialized: true,
      initialValues
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


export default function appReducer(state = initialState, action = {}) {
  const handler = actions[action.type];
  return handler ? handler(state, action) : state;
}
