import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <Link className='nav-link list-unstyled text-white' to='/'>Inicio</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul>
          <li className="nav-item">
            <Link className='nav-link list-unstyled text-white' to='/lista'>Lista de Transacciones</Link> 
          </li>
          <li className="nav-item">
            <Link className='nav-link list-unstyled text-white' to='/buscador'>Buscador de Transacciones</Link> 
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu