import React from "react"
import styled from "styled-components"

import QR_Code from "../../images/site-qr-code.svg"

const ContentWrapStyled = styled.div`
  margin-left: 50px;
  align-self: end;
  margin-bottom: 80px;

  &&& {
    @media only screen and (min-width: 768px) {
      display: flex;
    }
  }
  flex-direction: column;
  grid-gap: 8px;

  h1 {
    font-size: 24px;
    line-height: 100%;
  }

  p {
    display: inline;
  }
  a {
    color: #d8a016;
  }

  .qr_code {
    width: 150px;
    margin-top: 1rem;
  }
`
const ContentWrap = () => {
  return (
    <ContentWrapStyled className="desktopContent">
      <h1>This app is best experienced on mobile.</h1>
      <div className="content_body">
        <p>
          Please scan the QR code to view this website on your mobile device, or
          visit{" "}
        </p>
        <a href="https://lamborghini-slide.vercel.app/">
          https://lamborghini-slide.vercel.app/
        </a>
      </div>
      <img src={QR_Code} className="qr_code" alt="" />
    </ContentWrapStyled>
  )
}

export default ContentWrap
