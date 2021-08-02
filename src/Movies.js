import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "./context"
import "./index.css"

const url = "https://cdn.bestmoviehd.net/share/images/no-cover.png"

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