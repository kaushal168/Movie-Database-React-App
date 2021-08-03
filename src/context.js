import axios from "axios";
import React, { useState, useContext, useEffect } from "react"
import "./index.css"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      try{
        const response = await axios.get(`${API_ENDPOINT}&s=${query}`)
        if (response.data.Response === 'True') {
          setMovies(response.data.Search)
          setError(false)
        }
        else {
          if(query !== ''){
            setError({ show: true, msg: response.data.Error })
          }
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    if(query === ''){
      setMovies([])
      setError(false)
    }
    //run without throttling search requests if initial page load
    if(query && !movies.length){
      fetchMovies()
    }
    else {//else throttle search requests
      let timeoutId = setTimeout(() => {
        if(query){
          fetchMovies()
        }
      }, 500)
      
      return () => {
        clearTimeout(timeoutId)
      }
    }
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