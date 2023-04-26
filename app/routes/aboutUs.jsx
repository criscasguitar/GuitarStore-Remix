import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/aboutUs.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

export function meta() {
  return(
      [
          {title: 'GuitarLA - About Us'},
          {description: 'Guitar sales, Music blog'}
      ]
  )
}

function AboutUs() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        About Us
      </h2>

      <div className="contenido">
        <img src={image} alt="image about us"/>

        <div>
          <p>Aliquam rutrum ultricies aliquet. Mauris egestas urna commodo tincidunt feugiat. Duis interdum, dolor et sagittis sagittis, enim arcu porta elit, vitae cursus ipsum erat sit amet leo. Nulla vehicula mollis elit in semper. Quisque gravida fermentum faucibus. Cras at fringilla lorem. Phasellus vel velit quis neque tempor gravida. Cras at fringilla lorem. Phasellus vel velit quis neque tempor gravida. </p>
          
          <p>Aliquam rutrum ultricies aliquet. Mauris egestas urna commodo tincidunt feugiat. Duis interdum, dolor et sagittis sagittis, enim arcu porta elit, vitae cursus ipsum erat sit amet leo. Nulla vehicula mollis elit in semper. Quisque gravida fermentum faucibus. Cras at fringilla lorem. Phasellus vel velit quis neque tempor gravida. Cras at fringilla lorem. Phasellus vel velit quis neque tempor gravida.
          </p>
        </div>
      </div>
    </main>
  )
}

export default AboutUs