import { configureStore } from '@reduxjs/toolkit';
import transaccionSlice from '../slices/transaccionSlice';

export const store = configureStore({
    reducer: {
        transacciones: transaccionSlice
    }
});