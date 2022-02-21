import React, { useState, useEffect } from "react"
import App from "../components/appMobile/App"
import styled from "styled-components"
import LamboText from "../images/logos/lamborgini-text-logo.svg"

const IndexStyled = styled.div`
  .desktopContent {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    .desktopContent {
      display: block;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const Index = () => {
  return (
    <IndexStyled className="">
      <h5 className="desktopContent">Hello</h5>
      <App></App>
      <img className="desktopContent" src={LamboText} alt="" />
    </IndexStyled>
  )
}

export default Index
