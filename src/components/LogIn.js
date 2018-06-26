import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { css } from 'emotion'
import styled from 'react-emotion'

import discover from '../images/DiscoverStart.png'

const Maintitle = css`
  font-size: 43pt;
  letter-spacing: 0.82pt;
  color: white;
  padding-top: 245px;
  margin-left: 33px;
`
const Subtitle = css`
  font-size: 16pt;
  margin: 27px 0 0 61px;
  font-style: italic;
  color: white;
  font-weight: lighter;
`

const ButtonStyle = css`
  color: white;
  font-size: 16px;
  border: solid white 1px;
  margin: 27px 0 0 131px;
  background-color: transparent;
`

const StartImage = styled('div')`
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
            <button className={ButtonStyle}>Get started</button>
          </Link>
        </StartImage>
      </div>
    )
  }
}
