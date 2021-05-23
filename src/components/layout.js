import React from "react"
import { Link } from "gatsby"

const ListLink = (props) => {
  return (
  <li class="pl-2 pr-4 py-2 cursor-pointer hover:bg-green-300 hover:text-green-700">
    <Link to={props.to}>{props.children}</Link>
  </li>
  )
}

const Layout = ({ children }) => {
  return (
    <div class="w-screen min-h-screen mx-auto">
      <header>
        <div class="flex flex-row flex-wrap justify-between items-end bg-gray-50 shadow min-h-10 md:min-h-20 font-sans">
          <div id="logo" class="flex flex-row flex-none md:self-center px-2 py-2 text-green-700 text-sm font-normal md:text-xl lg:text-3xl xl:text-4xl md:font-semibold">
            <Link to="/">Barmbeker Nephrologen Gespräche</Link>
          </div>
            <nav id="nav">
              <ul class="flex flex-none text-center text-sm font-thin md:text-xl md:font-thin">
                <ListLink to="/">Start</ListLink>
                <ListLink to="/referenten/">Referenten</ListLink>
                <ListLink to="/infos/">Infos</ListLink>
                <ListLink to="/termine/">Termine</ListLink>
                <ListLink to="/sponsoren/">Sponsoren</ListLink>
              </ul>
            </nav>
        </div>
      </header>
      <div class="md:mx-auto md:container min-h-screen px-2 py-6">
        {children}
      </div>
      <footer>
        <div class="bg-gray-50 min-h-20">
            <ul class="flex flex-row justify-end text-center text-sm font-thin md:text-xl md:font-thin">
              <ListLink to="/impressum/">Impressum</ListLink>
              <ListLink to="/datenschutzerklaerung/">Datenschutzerklärung</ListLink>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout