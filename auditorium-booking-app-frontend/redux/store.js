import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'iws-movie-auth',
    storage
};

const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
    }
});

export const persistedStore = persistStore(store);
