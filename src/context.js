import React, { useState, useContext, useEffect } from "react"
import "./index.css"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setMovies(data.Search)
        setError(false)
      }
      else {
        if(query !== ''){
          setError({ show: true, msg: data.Error })
        }
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
    if(query === ''){
      setMovies([])
      setError({ show: false })
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
    // eslint-disable-next-line
  }, [query])

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }