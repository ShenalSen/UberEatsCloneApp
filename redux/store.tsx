/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers/index';

export default function configureStore(initialState: unknown) {
    return createStore(reducer, initialState);
}