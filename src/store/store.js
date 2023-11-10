import {configureStore } from '@reduxjs/toolkit'
import serviceAddReducer from '../reducers/serviceAdd';
import serviceListReducer from '../reducers/serviceList';
import serviceFilterReducer from '../reducers/serviceFilter';

const store = configureStore({
    reducer: {
        serviceAdd: serviceAddReducer,
        serviceList: serviceListReducer,
        serviceFilter: serviceFilterReducer,
    }
})

export default store;