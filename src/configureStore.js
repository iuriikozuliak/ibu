import { createStore } from 'redux';
import reducer         from './modules';

const configureStore = (initialState = {}) => {
  const store = createStore(reducer, initialState);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules', () => {
        store.replaceReducer(reducer);
      });
    }
  }

  return store;
};

export default configureStore;
