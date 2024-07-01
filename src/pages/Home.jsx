import { Container } from "react-bootstrap"
import FormTransaccion from "../components/FormTransaccion"

const Home = () => {
  return (
    <Container>
      <h1 className="text-center my-5">App de Transacciones</h1>
      <h2 className="text-center m-b-3">Realice sus transacciones aquí</h2>
      <FormTransaccion />
    </Container>
  )
}

export default Home