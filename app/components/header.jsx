import {Link, useLocation} from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Nav from './nav'

function Heder() {


  return (
    <header className="header">
      <div className='contenedor barra'>
        <Link to='/'>
          <img className='logo' src={Logo} alt="Logo Image" />
        </Link>
        
        <Nav />
      </div>
    </header>
  )
}

export default Heder