import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "./context"
import "./index.css"

const url = "https://i.ibb.co/myrFqyM/1483562066-d38bc38ad9ba60f9091aa2a9b3f4190f.png"

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className='loader'></div>
  }

  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies