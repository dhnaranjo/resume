import React from 'react'
import styled, { css } from 'react-emotion'

import { H1, H4, Link, A } from '../../components/type'

const headerCss = css`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const Header = () => (
  <header className={headerCss}>
    <H1>
    </H1>
  </header>
)

export default Header
