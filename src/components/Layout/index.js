/* eslint-disable react/prop-types */
import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Div, Title, Subtitle } from "./styles"

export const Layout = ({ children, title, subtitle, noShowHead = false }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {!noShowHead && (
          <Fragment>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Fragment>
        )}
        {children}
      </Div>
    </Fragment>
  )
}
