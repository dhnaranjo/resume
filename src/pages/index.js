import React from 'react'
import Link from 'gatsby-link'
import { injectGlobal} from 'react-emotion'

injectGlobal`
  * {
  }
`

export default ({data}) => {
  console.log(data)
  return <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
