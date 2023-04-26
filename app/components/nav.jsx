import {Link, useLocation} from '@remix-run/react'
import image from '../../public/img/carrito.png'

function Nav() {
    const location = useLocation()
  return (
    <nav className="navegacion">
        <Link
        to="/"
        className={location.pathname === '/' ? 'active' : ''}> Home</Link>
        <Link
        to="/aboutUs"
        className={location.pathname === '/aboutUs' ? 'active' : ''}> About Us</Link>
        <Link
        to="/store"
        className={location.pathname === '/store' ? 'active' : ''}> Store</Link>
        <Link
        to="/blog"
        className={location.pathname === '/blog' ? 'active' : ''}> Blog</Link>
        <Link
          to="/shoppingCart"> 
          <img src={image} alt="Shopping car" />
        </Link>
    </nav>
  )
}

export default Nav