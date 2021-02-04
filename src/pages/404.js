import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>404 - Seite nicht gefunden</title>
      <h1 style={headingStyles}>Seite nicht gefunden</h1>
      <p style={paragraphStyles}>
        Tut uns leid,{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Die gewünschte Seite konnte leider nicht gefunden werden.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Dieser Text ist nur im Entwicklungsmodus zu sehen.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Zur Startseite</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
