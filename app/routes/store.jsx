import { useLoaderData, Outlet, useOutletContext } from '@remix-run/react'
import {getGuitars} from '~/models/guitars.server'
import GuitarList from '../components/guitarList'
import styles from '~/styles/guitars.css'

export function meta() {
    return (
      [ 
        {title: "GuitarLA - Guitar's Store"},
        {description: "GuitarLA - Our Colection"}
      ]
    )
}

export function links() {
    return [
      {
        rel: 'stylesheet',
        href:styles
      }
    ]
}

export async function loader() {
  const guitars = await getGuitars()
  return guitars.data
}

function Store() {

  const guitars = useLoaderData()

  return (
    <main className='contenedor'>
      <GuitarList 
        guitars={guitars}
      />
      <Outlet 
        context={useOutletContext()}
      />
    </main>
  )
}

export default Store