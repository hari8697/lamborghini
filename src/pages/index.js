import React, { useState, useEffect } from "react"
import App from "../components/appMobile/App"
import styled from "styled-components"
import LamboText from "../images/logos/lamborgini-text-logo.svg"
import ContentWrap from "../components/desktop/ContentWrap"

const IndexStyled = styled.div`
  height: 100vh;
  .desktopContent {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    .desktopContent {
      display: block;
    }
    display: grid;
    align-items: center;
    grid-gap: 1rem;
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }
`
const LamboTextStyled = styled.img`
  justify-self: end;
  margin-right: 20px;
  max-height: 80%;

  @media only screen and (min-width: 900px) {
    margin-right: 50px;
  }
  /* margin-right: -10vw; */
`
const Index = () => {
  return (
    <IndexStyled className="">
      <ContentWrap></ContentWrap>
      <App></App>
      <LamboTextStyled className="desktopContent" src={LamboText} alt="" />
    </IndexStyled>
  )
}

export default Index
