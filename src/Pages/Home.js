import React from "react"
import Form from "./Search"
import Movies from "../Movies"
import "../index.css"

const Home = () => {
  return (
    <div>
      <Form />
      <Movies />
    </div>
  )
}

export default Home