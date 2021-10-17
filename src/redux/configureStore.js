import { createStore, combineReducers, applyMiddleware } from 'redux';
// funciones reductoras mas simples
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// cuando alguien invoca a este configureStore configura mi redux store en la app
export const ConfigureStore = () => {
  const store = createStore(
    // combinamos nuestras funciones reductoras simples a un estado mas general mediante combineReducers
    combineReducers({ 
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}
