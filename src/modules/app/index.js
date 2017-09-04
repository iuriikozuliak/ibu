export const INIT_APP = 'app/INIT_APP';

const initialState = {
  isInitialized: false
};

const actions = {
  [INIT_APP]: state => ({
    ...state,
    isInitialized: true
  })
};

export function initApp() {
  return {
    type: INIT_APP
  };
}

export default function appReducer(state = initialState, action = {}) {
  const handler = actions[action.type];
  return handler ? handler(state, action) : state;
}
