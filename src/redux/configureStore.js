import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// cuando alguien invoca a este configureStore configura mi redux store en la app
export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    initialState
  );

  return store;
}
