
const CardTransaccion = ({transaccion}) => {

  return (
          <tr key={transaccion?.id}>
            <td>Descripción: {transaccion?.descripcion} </td>
            <td>Monto: {transaccion?.monto} </td>
            <td>Categoría: {transaccion?.categoria} </td>
            <td>Fecha: {transaccion?.fecha} </td>
            <td>{transaccion?.ingresoOGasto} </td>
          </tr>
  );
};

export default CardTransaccion;