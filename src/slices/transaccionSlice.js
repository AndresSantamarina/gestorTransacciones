import { createSlice } from '@reduxjs/toolkit';

const cargarTransacciones = () =>{
    const transaccionesAlmacenadas = localStorage.getItem("transacciones")
    return transaccionesAlmacenadas ? JSON.parse(transaccionesAlmacenadas) : []
};

const guardarTransaccion = (transacciones) =>{
    localStorage.setItem("transacciones", JSON.stringify(transacciones))
};



const transaccionSlice = createSlice({
    name: 'transacciones',
    initialState: cargarTransacciones(),
    reducers: {
        agregarTransaccion: (state, action) => {
            state.unshift(action.payload)
            guardarTransaccion(state);
        },
        
        editarTransaccion: (state, action) => {
            const {id, descripcion, monto, categoria, fecha} = action.payload;
            const campo = state.findIndex((transaccion => transaccion.id === id));
            if (campo !== -1){
                state[campo] = {
                    ...state[campo],
                    descripcion,
                    monto,
                    categoria,
                    fecha
                };
                guardarTransaccion(state);
            }

        },
        eliminarTransaccion: (state, action) => {
            const {id} = action.payload;
            const transacciones = cargarTransacciones();
            const nuevasTransacciones = transacciones.filter((transaccion) => transaccion.id !== id);
            guardarTransaccion(nuevasTransacciones);            
        },
    },      
});

export const { agregarTransaccion, editarTransaccion, eliminarTransaccion} = transaccionSlice.actions;

export default transaccionSlice.reducer;