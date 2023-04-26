import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import ListPost from "~/components/listPost"
import styles from '~/styles/blog.css'

export function meta() {
  return (
    [ 
      {title: "GuitarLA - Our Blog"},
      {description: "GuitarLA - Welcome to our Blog"}
    ]
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()
  return (
    <main className='contenedor'>
      <ListPost
        posts={posts}
      />
    </main>
  )
}

export default Blog