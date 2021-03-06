import React from "react"
import { Link } from "gatsby"

/*
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Barmbeker Nephrologen Gespräche</title>
          <link rel="canonical" href="https://www.nephrologiehamburg.de" />
        </Helmet>
      </div>
    )
  }
}
*/

const ListLink = props => (
  <li class="pr-5">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div class="container mx-auto">
      <header>
      <div class="sticky top-0">
        <nav class="flex flex-wrap items-center justify-between mt-5 mb-5 bg-gray-50 font-sans">
          <Link to="/">
            <h3>Barmbeker Nephrologen Gespräche</h3>
          </Link>
          <ul class="flex flex-row">
            <ListLink to="/">Start</ListLink>
            <ListLink to="/referenten/">Referenten</ListLink>
            <ListLink to="/infos/">Infos</ListLink>
            <ListLink to="/termine/">Termine</ListLink>
            <ListLink to="/sponsoren/">Sponsoren</ListLink>
          </ul>
        </nav>
      </div>
      </header>
      {children}
      <footer>
        <nav class="flex flex-wrap items-center justify-between mt-5 bg-gray-50">
        <ul class="flex flex-row">
          <ListLink to="/impressum/">Impressum</ListLink>
          <ListLink to="/datenschutzerklaerung/">Datenschutzerklärung</ListLink>
        </ul>
        </nav>
      </footer>
    </div>
  )
}
