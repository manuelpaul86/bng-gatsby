import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div class="container mx-auto pt-4">
      <header>
        <Link to="/">
          <h3>Barmbeker Nephrologen Gespräche</h3>
        </Link>
        <ul>
          <ListLink to="/">Start</ListLink>
          <ListLink to="/referenten/">Referenten</ListLink>
          <ListLink to="/infos/">Infos</ListLink>
          <ListLink to="/termine/">Termine</ListLink>
          <ListLink to="/sponsoren/">Sponsoren</ListLink>
        </ul>
      </header>
      {children}
      <footer>
        <ul>
          <ListLink to="/impressum/">Impressum</ListLink>
          <ListLink to="/datenschutzerklaerung/">Datenschutzerklärung</ListLink>
        </ul>
      </footer>
    </div>
  )
}
