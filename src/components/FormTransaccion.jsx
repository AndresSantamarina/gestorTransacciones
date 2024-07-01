import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { agregarTransaccion } from '../slices/transaccionSlice'


const FormTransaccion = () => {
    const [cuentaOrigen, setCuentaOrigen] = useState("")
    const [cuentaDestino, setCuentaDestino] = useState("")
    const [monto, setMonto] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [fecha, setFecha] = useState("")
    const [ingresoOGasto, setIngresoOGasto] = useState("")

    const dispatch = useDispatch()
    
    const handleTransacciones = (e)=>{
        e.preventDefault();
        //validaciones
        const nuevaTransaccion = {
            id: Math.floor(Math.random() * 1000),
            cuentaOrigen,
            cuentaDestino,
            monto,
            descripcion,
            categoria,
            fecha,
            ingresoOGasto
        }

        dispatch(agregarTransaccion(nuevaTransaccion))
        // setCuentaOrigen("")
        setCuentaDestino("")
        setMonto("")
        setDescripcion("")
        // setCategoria("")
        setFecha("")
        // setIngresoOGasto("")
    }

    


  return (
    <Form onSubmit={handleTransacciones}>
        <Form.Group controlId='cuentaOrigen'>
          <Form.Label>Seleccione cuenta de origen</Form.Label>
          <Form.Select onChange={(e) => setCuentaOrigen(e.target.value)}>
            <option value='' disabled>Elija una cuenta de origen</option>
            <option value='cuentaCorriente'>Cuenta corriente</option>
            <option value='cajaAhorro'>Caja de ahorro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='cuentaDestino'>
          <Form.Label>Ingrese CBU/Alias</Form.Label>
          <Form.Control type="text" onChange={(e) => setCuentaDestino(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='monto'>
          <Form.Label>Ingrese monto a transferir</Form.Label>
          <Form.Control type="number" onChange={(e) => setMonto(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='categoria'>
          <Form.Label>Ingrese categoría</Form.Label>
          <Form.Select onChange={(e) => setCategoria(e.target.value)}>
            <option value="" disabled>Elija una categoría</option>
            <option value="sinCategoría">Sin categoría</option>
            <option value="alimentosBebidas">Alimentos/Bebidas</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="servicios">Servicios</option>
            <option value="supermercado">Supermercado</option>
            <option value="transporte">Transporte</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='descripcion'>
          <Form.Label>Ingrese una breve descripción</Form.Label>
          <Form.Control as="textarea" onChange={(e) => setDescripcion(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='fecha'>
          <Form.Label>Ingrese la fecha</Form.Label>
          <Form.Control type="date" onChange={(e) => setFecha(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='ingresoOGasto'>
          <Form.Label>Indique si la operación es un ingreso o un gasto</Form.Label>
          <Form.Select onChange={(e) => setIngresoOGasto(e.target.value)}>
            <option value="" disabled>Elija una opción</option>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </Form.Select>
        </Form.Group>

        <Button type='submit' className='mt-2'>Finalizar</Button>
      </Form>
  )
}

export default FormTransaccion