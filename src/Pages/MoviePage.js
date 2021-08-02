import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { API_ENDPOINT } from "../context"
import "../index.css"

const url = "https://cdn.bestmoviehd.net/share/images/no-cover.png"

const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    if (data.Response === 'False') {
      setError({ show: true, msg: data.Error })
      setLoading(false)
    }
    else {
      setMovie(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id]);

  if (isLoading) {
    return(
      <div className="loading"></div>
    )
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h2>{error.msg}</h2>
        <Link to="/" className="btn">Back To Home</Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? url : poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <h4>Year: {year === 'N/A' ? '' : year}</h4>
        <p>{plot === 'N/A' ? '' : plot}</p>
        <Link to="/" className="btn">Back To Home</Link>
      </div>
    </section>
  )
}

export default MovieInfo