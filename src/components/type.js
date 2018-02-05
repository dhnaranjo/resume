import styled, { css, injectGlobal } from 'react-emotion'
import GatsbyLink from 'gatsby-link'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|PT+Serif:400,700');

	html {
		font-size: 10pt;
		font-family: 'PT Sans';
		font-weight: 400;
		line-height: 1.45;
		color: black;
	}

	@media screen {
		html { font-size: 1em; }
	}

	@media print {
		html { font-size: 10pt; }
	}
`

const headings = css`
  margin: 0;
  font-weight: inherit;
  line-height: 1.2;
`

export const H1 = styled.h1`
  ${headings};
  font-size: 1.602em;
`

export const H2 = styled.h2`
  ${headings};
  font-size: 1.424em;
`

export const H3 = styled.h3`
  ${headings};
  font-size: 1.266em
`

export const H4 = styled.h4`
  ${headings};
  font-size: 1.125em;
`

export const P = styled.p`
  font-family: 'PT Serif';
  margin-bottom: 1.3em;
  hyphens: auto;
`

const linkCss = css`
	text-decoration: none;
	margin: 0;
	padding: 0;
	color: inherit;
`
export const Link = styled(GatsbyLink)`${linkCss}`
export const A = styled.a`${linkCss}`

export const Strong = styled.span`
	font-weight: 700;
`
