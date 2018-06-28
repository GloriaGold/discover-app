import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { css } from 'emotion'
import styled, { keyframes } from 'react-emotion'

import discover from '../images/DiscoverStart.png'

const Maintitle = css`
  font-size: 43pt;
  letter-spacing: 0.82pt;
  color: white;
`
const Subtitle = css`
  font-size: 18pt;
  margin: 50px 0 150px 0;
  font-style: italic;
  color: white;
  font-weight: lighter;
`

const appear = keyframes`

  0%  {
    transform: translate(0, -20px);
    opacity: 0;
  
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  `

const StyledButton = styled('button')`
  color: white;
  font-size: 24px;
  border: solid white 2px;
  width: 200px;
  height: 80px;
  border-radius: 5px;
  background-color: transparent;
  animation: ${appear} 1.2s;
  }
`

const StartImage = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${discover});
  width: 375px;
  height: 100vh;
`

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <StartImage>
          <div className={Maintitle}> DISCOVER</div>
          <div className={Subtitle}> Discover the urban jungle </div>
          <Link to={`/home`}>
            <StyledButton>Get started</StyledButton>
          </Link>
        </StartImage>
      </div>
    )
  }
}
