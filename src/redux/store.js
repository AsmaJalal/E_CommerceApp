import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

// Combine all your reducers here if you have multiple
const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
