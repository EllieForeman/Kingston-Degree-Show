import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import '../pages/index.css'

const ArtDirectedBackground = ({ className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "logoIcon.png" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "logoIcon.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className={className}
      fluid={sources}
    >
      <StyledInnerWrapper>
        <Link className="enterButton" to="/gallery/">enter</Link> <br />
        </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  /* margin-top: 10%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  /* You should set a background-size as the default value is "cover"! */
  background-size: contain;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  @media (max-width: 768px) {
    width: 100%;
  }
`


export default StyledArtDirectedBackground