import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Sorry, the page you are looking for cannot be found</h3>
      <Link to="/">Back Home</Link>
    </div>
  )
}

export default Error