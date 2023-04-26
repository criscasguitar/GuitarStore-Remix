import { useLoaderData } from '@remix-run/react'
import {getPost} from '~/models/posts.server'
import {dateFormat} from '~/utils/helpers'
import styles from '~/styles/blog.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}   

export function meta({data}) {

    if(!data) {
      return (
        [ 
          {title: 'GuitarLA - Blog not found'},
          {description: 'Blog of Guitars, guitar not found'}
        ]
      )
    }
    return (
      [ 
        {title: `GuitarLA - ${data.data[0].attributes.title}`},
        {description: `Sale of Guitars, blog ${data.data[0].attributes.title}`}
      ]
    )
  }

export async function loader({params}) {
    const {postUrl} = params
    const post = await getPost(postUrl)

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Blog not found'
        })
    }

    return post
}

function Post() {

    const post = useLoaderData()
    const {title, content, image, publishedAt} = post?.data[0]?. attributes

  return (
    <article className="contenedor post mt-4">
        <img src={image.data?.attributes.url} alt="Blog Image" className={`BLog Image${title}`} />
        <div className='contenido'>
            <h3>{title}</h3>
            <p className="fecha">{dateFormat(publishedAt)}</p>
            <p className='texto'>{content}</p>
        </div>
    </article>
  )
}

export default Post