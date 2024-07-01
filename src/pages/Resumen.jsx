import { useSelector } from "react-redux";

const Resumen = () => {
  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );

  const ingresos = transacciones
    .filter((transaccion) => transaccion.ingresoOGasto === "Ingreso")
    .reduce((total, transaccion) => total + parseFloat(transaccion.monto), 0);

  const gastos = transacciones
    .filter((transaccion) => transaccion.ingresoOGasto === "Gasto")
    .reduce((total, transaccion) => total + parseFloat(transaccion.monto), 0);

  const saldo = ingresos - gastos;

  return (
    <div>
      <h2 className="text-center my-5">Resumen de la cuenta</h2>

      <p>Ingresos totales: ${ingresos.toFixed(2)}</p>
      <p>Gastos totales: ${gastos.toFixed(2)}</p>
      <p>Saldo final: ${saldo.toFixed(2)}</p>
    </div>
  );
};

export default Resumen;
