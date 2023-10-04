import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const NotFound = () => {

    const error = useRouteError()
    console.log(error)

  return (
    <div>
        <h1>404 Pagina No Localizada =P</h1>
        <Link to="/">Volver a inicio</Link>
    </div>
  )
}

export default NotFound