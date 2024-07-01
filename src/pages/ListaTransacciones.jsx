import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import CardTransaccion from '../components/CardTransaccion';

const ListaTransacciones = () => {
  const listaTransacciones = useSelector((state) => state.transacciones);

  return (
    <Container>
      <Table>
        <thead>
          <th>Cuenta origen</th>
          <th>Cuenta destino</th>
          <th>Categoría</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Ingreso/Gasto</th>
        </thead>

        <tbody>
          {listaTransacciones.map((transaccion) => {
            <CardTransacciontransaccion transaccion={transaccion}></CardTransacciontransaccion>
          })}
        </tbody>
      </Table>
</Container>
  )
}

export default ListaTransacciones