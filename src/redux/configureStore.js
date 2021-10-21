import { createStore, combineReducers, applyMiddleware } from 'redux';
// funciones reductoras mas simples
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

// cuando alguien invoca a este configureStore configura mi redux store en la app
export const ConfigureStore = () => {
  const store = createStore(
    // combinamos nuestras funciones reductoras simples a un estado mas general mediante combineReducers
    combineReducers({ 
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}
