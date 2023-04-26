import { useState } from "react"
import { getGuitar } from "~/models/guitars.server"
import { useLoaderData, useOutletContext } from '@remix-run/react'
import styles from '~/styles/guitars.css'



export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}) {
  
  const { guitarUrl} = params
  
  const guitar = await getGuitar(guitarUrl) 

  if(guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar not found'
    })
  }

  return guitar
}

export function meta({data}) {

  if(!data) {
    return (
      [ 
        {title: 'GuitarLA - Guitar not found'},
        {description: 'Sale of Guitars, guitar not found'}
      ]
    )
  }
  return (
    [ 
      {title: `GuitarLA - ${data.data[0].attributes.name}`},
      {description: `Sale of Guitars, guitar ${data.data[0].attributes.name}`}
    ]
  )
}

function Guitar()  {

  const {addCart} = useOutletContext()
  const [amount, setAmount] = useState(0)
  const guitar = useLoaderData()
  const { name, description, image, price} = guitar.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault();

    if(amount < 1) {
      alert('You have not entered a correct amount')
      return
    }

    const guitarSelected = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      amount
    }

    addCart(guitarSelected)
  }

  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={image.data.attributes.url} alt={`Guitar image ${name}`} />

      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>

        <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="cantidad" className="">Amount</label>

            <select 
              onChange={e => setAmount(+e.target.value)}
              id="cantidad"
            >
              <option value="0">-- Select --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="add"/>
        </form>
      </div>
    </main>
  )
}

export default Guitar