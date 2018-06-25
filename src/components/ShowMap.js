import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GoogleApiWrapper } from 'google-maps-react'

import GoogleMaps from '../components/GoogleMaps'
import Footer from '../components/Footer'
import backArrow from '../images/backArrow.svg'

import styled from 'react-emotion'

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 104px auto 47px;
  background-color: #d6c1f5;
  height: 100vh;
  font-family: 'HelveticaNeue-Regular', sans-serif;
`

const Section = styled('section')`
  background-color: #d6c1f5;
  padding: 0 12px;
  margin-bottom: 12px;
`
const Header = styled('header')`
  grid-row: 1;
  margin: 25px 37px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  background-color: #d6c1f5;
  color: white;
  font-size: 16px;
`
const Title = styled('div')`
  font-size: 28px;
  margin: 6px auto;
  text-align: center;
  text-transform: uppercase;
`

export class ShowMap extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Header>
            <Link to={`/`}>
              <img src={backArrow} alt="backArrow" />
            </Link>
            <Title>Google Maps</Title>
          </Header>
          <Section>
            <div>
              <GoogleMaps google={this.props.google} />
            </div>
          </Section>

          <Footer />
        </Grid>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8tcT8DxCIABGEW-YHWh7WfA0voCjXZPQ',
})(ShowMap)
