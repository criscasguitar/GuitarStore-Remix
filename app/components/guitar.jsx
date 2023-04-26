import {Link} from '@remix-run/react'

export default function Guitar({guitar}) {

  const {description, image, price, url, name} = guitar

  return (
    <div className="guitarra">
      <img src={image.data.attributes.formats.medium.url} alt={`Guitar Image ${name}`} />
      <div className="contenido">
          <h3>{name}</h3>
          <p className="descripcion">{description}</p>
          <p className="precio">${price}</p>

          <Link className='enlace' to={`/guitars/${url}`}>See more</Link>
      </div>  
    </div> 
  )
}
