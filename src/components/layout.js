import React from "react"
import { Link } from "gatsby"
import logo from "../assets/jubilee-logo-transparent.png"

/*
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="de-de" amp />
          <title>Barmbeker Nephrologen Gespräche</title>
          <meta name="description" content="Helmet application" />
          <meta property="og:type" content="article" />
          <link rel="canonical" href="https://www.nephrologiehamburg.de" />
          <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" />
        </Helmet>
      </div>
    )
  }
}
*/

const ListLink = props => (
  <li class="inline-block pr-5">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div class="w-screen min-h-screen mx-auto bg-gray-400">
      <header>
        <div class="bg-gray-100 py-5 px-5">
          <nav id="nav" class="">
            <Link to="/"><img src={logo} alt="Logo Barmbeker Nephrologen Gespraeche" class="inline-block h-16 w-16"/></Link>
            <Link to="/" class="pl-5 text-4xl font-sans font-light tracking-wide align-middle">Barmbeker Nephrologen Gespräche</Link>
            <ul class="mt-5 text-center">
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
        <div class="bg-yellow-100 py-5">
          <nav>
            <ul class="text-right align-text-bottom">
              <ListLink to="/impressum/">Impressum</ListLink>
              <ListLink to="/datenschutzerklaerung/">Datenschutzerklärung</ListLink>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
