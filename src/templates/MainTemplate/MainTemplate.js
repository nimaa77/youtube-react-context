import React from "react"
import { Link } from "react-router-dom"
import "./MainTemplate.css"

function MainTemplate({ children }) {
  return (
    <div className="container">
      <header>
        <Link to="/">Home</Link>
        <Link to="/count">Count</Link>
      </header>
      {children}
    </div>
  )
}

export default MainTemplate
