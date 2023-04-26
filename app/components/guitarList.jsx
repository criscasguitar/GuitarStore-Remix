import Guitar from './guitar'

export default function guitarList({guitars}) {
  return (
    <>
        <h2 className='heading'> Our Colection  </h2>

        {guitars.length && (
        <div className='guitarras-grid'>
            {guitars.map(guitar => (
                <Guitar 
                key={guitar?.id}
                guitar={guitar?.attributes}
                />
            ))}
        </div>
        )}
    </>
  )
}
