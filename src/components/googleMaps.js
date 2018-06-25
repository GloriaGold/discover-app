import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class googleMaps extends Component {
  state = {
    locations: [
      {
        name: 'standup paddeling',
        location: {
          lat: 53.5627626,
          lng: 9.9910404,
        },
      },
    ],
  }

  componentDidUpdate() {
    this.loadMap()
  }

  componentDidMount() {
    this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props
      const maps = google.maps

      const mapRef = this.refs.map
      const node = ReactDOM.findDOMNode(mapRef)

      const mapConfig = Object.assign(
        {},
        {
          center: { lat: 53.551085, lng: 9.993682 },
          zoom: 11,
          mapTypeId: 'roadmap',
        }
      )

      this.map = new maps.Map(node, mapConfig)

      this.state.locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.location.lat, lng: location.location.lng },
          map: this.map,
          title: location.name,
        })
      })
    }
  }

  render() {
    const style = {
      width: '98%',
      height: '75vh',
    }

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
