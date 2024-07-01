import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { eliminarTransaccion } from "../slices/transaccionSlice";
import { useNavigate } from "react-router-dom";

const ListaTransacciones = () => {
  const listaTransacciones = useSelector((state) => state.transacciones.transacciones);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleEditar = (id) => {
    navigate(`/editar/${id}`)
  };

  const handleEliminar = (id) => {
    dispatch(eliminarTransaccion({ id }));
  };

  return (
    <Container>
      <Table className="text-center my-5" responsive>
        <thead>
          <tr>
            <th>Cuenta origen</th>
            <th>Cuenta destino</th>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Ingreso/Gasto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaTransacciones.map((transaccion) => {
            return (
              <tr key={transaccion.id}>
                <td>{transaccion.cuentaOrigen}</td>
                <td>{transaccion.cuentaDestino}</td>
                <td>$ {transaccion.monto}</td>
                <td>{transaccion.categoria}</td>
                <td>{transaccion.descripcion}</td>
                <td>{transaccion.fecha}</td>
                <td>{transaccion.ingresoOGasto}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => handleEditar(transaccion.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminar(transaccion.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListaTransacciones;
