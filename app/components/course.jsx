import React from 'react'

function Course({course}) {

    const {content, image, title} = course
  return (
    <section className='curso'>
        <style jsx="true"> {`
            .curso {
                background-image: linear-gradient(to right, rgba(0 0 0/ .65), rgba(0 0 0 / .7)), url(${
                    image.data.attributes.url
                })
            }
        `}

        </style>
        <div className='contenedor curso-grid'>
            <div className='contenido'>
                <h2 className='heading'>{title}</h2>
                <p className='texto'>{content}</p>
            </div>
        </div>
    </section>
  )
}

export default Course