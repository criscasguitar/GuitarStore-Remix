import { useLoaderData } from '@remix-run/react'
import {getGuitars} from '~/models/guitars.server'
import {getPosts} from '~/models/posts.server'
import {getCourse} from '~/models/course.server'
import GuitarList from '~/components/guitarList'
import stylesGuitars from '~/styles/guitars.css'
import stylesCurso from '~/styles/curso.css'
import stylesPosts from '~/styles/blog.css'
import ListPost from '~/components/listPost'
import Course from '../components/course'

export function meta() {
  return (
    [ 
      {title: "GuitarLA - Home"},
      {description: "GuitarLA - Welcome to our Blog"}
    ]
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitars
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }

  ]
}

export async function loader() {
  
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])

  return {
    guitars: guitars.data,
    posts: posts.data,
    course:course.data
  }
}

function Index() {

  const {guitars, posts, course} = useLoaderData()


  return (
    <>
      <main className='contenedor'>
        <GuitarList
          guitars={guitars}
        />
      </main>
      
      <Course 
        course={course.attributes}
      />

      <section className='contenedor'>
        <ListPost
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index