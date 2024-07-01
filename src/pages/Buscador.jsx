import { useDispatch, useSelector } from "react-redux";
import CardTransaccion from "../components/CardTransaccion";
import { buscarTransaccion } from "../slices/transaccionSlice";
import { useState } from "react";

const Buscador = () => {
  const dispatch = useDispatch();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const listaTransacciones = useSelector((state) => state.transacciones.transaccionesFiltradas);

  // const listaTransacciones = useSelector((state) => {
  //   return state.transacciones.filter(
  //     (transaccion) => transaccion.categoria === categoriaSeleccionada
  //   );
  // });

  const handleFiltrar = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
    dispatch(buscarTransaccion({ categoria }));
    console.log(categoria);
    console.log(listaTransacciones);
  };

  return (
    <>
      <h2 className="text-center my-5">Buscador</h2>
      <form className="ms-5">
        <label>Seleccione una categoría</label>
        <select
          className="ms-2"
          value={categoriaSeleccionada}
          onChange={handleFiltrar}
        >
          <option value="Sin categoría">Sin categoría</option>
          <option value="Alimentos/Bebidas">Alimentos/Bebidas</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Servicios">Servicios</option>
          <option value="Supermercado">Supermercado</option>
          <option value="Transporte">Transporte</option>
        </select>
      </form>

      <CardTransaccion listaTransacciones={listaTransacciones} />
    </>
  );
};

export default Buscador;
