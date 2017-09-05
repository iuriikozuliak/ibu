export const INIT_FORM = 'app/INIT_FORM';

const initialState = {};

const actions = {
  [INIT_FORM]: (state, { payload: { id, initialValues }}) => ({
    ...state,
    [id]: {
      isInitialized: true,
      initialValues
    }
  })
};

export function initForm({ id, initialValues }) {
  return {
    type: INIT_FORM,
    payload: { id, initialValues }
  };
}

export default function appReducer(state = initialState, action = {}) {
  const handler = actions[action.type];
  return handler ? handler(state, action) : state;
}
