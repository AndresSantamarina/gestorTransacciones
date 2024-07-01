import { createSlice } from '@reduxjs/toolkit';

const cargarTransacciones = () => {
    const transaccionesAlmacenadas = localStorage.getItem("transacciones")
    return transaccionesAlmacenadas ? JSON.parse(transaccionesAlmacenadas) : []
};

const guardarTransaccion = (transacciones) => {
    localStorage.setItem("transacciones", JSON.stringify(transacciones))
};



const transaccionSlice = createSlice({
    name: 'transacciones',
    initialState: {
        transacciones: cargarTransacciones(),
        transaccionesFiltradas: []
    },
    reducers: {
        agregarTransaccion: (state, action) => {
            state.transacciones.unshift(action.payload)
            guardarTransaccion(state.transacciones);
        },

        editarTransaccion: (state, action) => {
            const { id, cuentaOrigen, cuentaDestino, monto, categoria, descripcion, fecha, ingresoOGasto } = action.payload;
            const transaccionEditar = state.transacciones.findIndex((transaccion => transaccion.id === id));
            if (transaccionEditar !== -1) {
                state.transacciones[transaccionEditar] = {
                    ...state.transacciones[transaccionEditar],
                    cuentaOrigen,
                    cuentaDestino,
                    monto,
                    categoria,
                    descripcion,
                    fecha,
                    ingresoOGasto
                };
                guardarTransaccion(state.transacciones);
            }

        },
        eliminarTransaccion: (state, action) => {
            // const { id } = action.payload;
            // const nuevasTransacciones = state.filter(transaccion => transaccion.id !== id);
            // guardarTransaccion(nuevasTransacciones);
            // return nuevasTransacciones
            const { id } = action.payload;
            state.transacciones = state.transacciones.filter(transaccion => transaccion.id !== id);
            guardarTransaccion(state.transacciones);
        },
        buscarTransaccion: (state, action) => {
            // const { categoria } = action.payload
            // const transaccionesFiltradas = state.filter(transaccion => transaccion.categoria === categoria)
            // return transaccionesFiltradas
            const { categoria } = action.payload;
            state.transaccionesFiltradas = state.transacciones.filter(transaccion => transaccion.categoria === categoria);
        }
    },
});

export const { agregarTransaccion, editarTransaccion, eliminarTransaccion, buscarTransaccion } = transaccionSlice.actions;

export default transaccionSlice.reducer;