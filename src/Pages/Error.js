import React from "react"
import { Link } from "react-router-dom"
import "../index.css"

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>Are You Lost, Baby Girl?</h2>
        <Link to="/" className="btn">Back To Home</Link>
      </div>
    </section>
  )
}

export default Error