import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { agregarTransaccion, editarTransaccion } from "../slices/transaccionSlice";
import { useNavigate, useParams } from "react-router-dom";

const FormTransaccion = () => {
  const [cuentaOrigen, setCuentaOrigen] = useState("");
  const [cuentaDestino, setCuentaDestino] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [ingresoOGasto, setIngresoOGasto] = useState("");

  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const transaccionActual = useSelector((state)=> state.transacciones.transacciones.find((transaccion)=> transaccion.id === parseInt(id)))

  useEffect(()=>{
    if(transaccionActual){
      setCuentaOrigen(transaccionActual.cuentaOrigen);
      setCuentaDestino(transaccionActual.cuentaDestino);
      setMonto(transaccionActual.monto);
      setDescripcion(transaccionActual.descripcion);
      setCategoria(transaccionActual.categoria);
      setFecha(transaccionActual.fecha);
      setIngresoOGasto(transaccionActual.ingresoOGasto);
    }

  }, [transaccionActual])

  const handleTransacciones = (e) => {
    e.preventDefault();
    //validaciones
    const nuevaTransaccion = {
      id: transaccionActual ? transaccionActual.id: Math.floor(Math.random() * 1000),
      cuentaOrigen,
      cuentaDestino,
      monto,
      descripcion,
      categoria,
      fecha,
      ingresoOGasto,
    };

    if(transaccionActual){
      dispatch(editarTransaccion(nuevaTransaccion))
      navigate('/lista')
    }else{
      dispatch(agregarTransaccion(nuevaTransaccion))
    }

    setCuentaOrigen("");
    setCuentaDestino("");
    setMonto("");
    setDescripcion("");
    setCategoria("");
    setFecha("");
    setIngresoOGasto("");
  };

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleTransacciones} className="my-4 w-50">
        <Form.Group controlId="cuentaOrigen" className="mt-2">
          <Form.Label>Seleccione cuenta de origen</Form.Label>
          <Form.Select
            value={cuentaOrigen}
            onChange={(e) => setCuentaOrigen(e.target.value)}
          >
            <option value="" disabled>
              Seleccione una cuenta
            </option>
            <option value="Cuenta Corriente">Cuenta corriente</option>
            <option value="Caja de Ahorro">Caja de ahorro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="cuentaDestino" className="mt-2">
          <Form.Label>Ingrese CBU/Alias</Form.Label>
          <Form.Control
            type="text"
            value={cuentaDestino}
            onChange={(e) => setCuentaDestino(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="monto" className="mt-2">
          <Form.Label>Ingrese monto a transferir</Form.Label>
          <Form.Control
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="categoria" className="mt-2">
          <Form.Label>Ingrese categoría</Form.Label>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="" disabled>
              Seleccione una categoría
            </option>
            <option value="Sin categoría">Sin categoría</option>
            <option value="Alimentos/Bebidas">Alimentos/Bebidas</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Servicios">Servicios</option>
            <option value="Supermercado">Supermercado</option>
            <option value="Transporte">Transporte</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="descripcion" className="mt-2">
          <Form.Label>Ingrese una breve descripción</Form.Label>
          <Form.Control
            as="textarea"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="fecha" className="mt-2">
          <Form.Label>Ingrese la fecha</Form.Label>
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="ingresoOGasto" className="mt-2">
          <Form.Label>
            Indique si la operación es un ingreso o un gasto
          </Form.Label>
          <Form.Select
            value={ingresoOGasto}
            onChange={(e) => setIngresoOGasto(e.target.value)}
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            <option value="Ingreso">Ingreso</option>
            <option value="Gasto">Gasto</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Button type="submit" variant="success">
            Finalizar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormTransaccion;
