import { Table } from "react-bootstrap";

const CardTransaccion = ({listaTransacciones}) => {

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Cuenta origen</th>
            <th>Cuenta destino</th>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Ingreso/Gasto</th>
          </tr>
        </thead>
        <tbody>
          {listaTransacciones.map((transaccion) => (
            <tr key={transaccion.id}>
              <td>{transaccion.cuentaOrigen}</td>
              <td>{transaccion.cuentaDestino}</td>
              <td>{transaccion.monto}</td>
              <td>{transaccion.categoria}</td>
              <td>{transaccion.descripcion}</td>
              <td>{transaccion.fecha}</td>
              <td>{transaccion.ingresoOGasto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CardTransaccion;
