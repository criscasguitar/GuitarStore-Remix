import { Link } from "@remix-run/react"
import {dateFormat} from '~/utils/helpers'

export default function Post({post}) {

   const {content, image, title, url, publishedAt} = post
  return (
    <article className="post">
        <img src={image.data.attributes.formats.small.url} alt="Blog Image" className={`BLog Image${title}`} />
        <div className='contenido'>
            <h3>{title}</h3>
            <p className="fecha">{dateFormat(publishedAt)}</p>
            <p className='resumen'>{content}</p>
            <Link className="enlace" to={`/posts/${url}`}>Read More</Link>
        </div>
    </article>
  )
}
