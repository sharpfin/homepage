import * as React from "react"
import { Link } from "gatsby"


const NotFoundPage = () => {
  return (
    <div className="grid justify-center items-center pt-72 text-center">
      <h1 className="text-4xl mb-5 font-bold">Page not found</h1>
      <p className="mb-5">Sorry we couldn’t find what you were looking for.</p>
      <Link to="/">
        <button className="rounded py-2 px-4 text-white bg-sharpfin-blue hover:bg-sharpfin-gray font-bold ">
          Go home
        </button>
      </Link>
    </div>

  )
}

export default NotFoundPage
