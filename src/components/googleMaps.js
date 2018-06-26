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
        var contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          '</div>' +
          '<h1 id="firstHeading" class="firstHeading">Standup paddeling</h1>' +
          '<div id="bodyContent">' +
          '<p>Der Schnupperkurs – für alle, die einen superleichten Einstieg in den SUP Sport suchen oder nicht ganz so hart reinhauen wollen.' +
          'Unsere zertifizierten Coaches helfen Dir den Grundstein für einen langen SUP Paddelspaß zu legen.' +
          'Die Basic Kurse geben Dir die Sicherheit auf dem Wasser und bereiten Dich für längere Touren und unsere Fortgeschrittenen- Kurse vor. ' +
          'Eine gute Voraussetzung für das Stand Up Paddling in allen traumhaften Buchten, Seen und Flüssen dieser Welt. ' +
          'Als eine der wenigen SUP-Schulen Europas bieten wir Dir dabei unterschiedliche Kurskonzepte für SUP Anfänger an. </p>' +
          '<p>Attribution: Standup paddeling, ' +
          'http://www.supclubhamburg.de/</a> '
        '</div>' + '</div>'

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        })

        const marker = new google.maps.Marker({
          position: { lat: location.location.lat, lng: location.location.lng },
          map: this.map,
          title: location.name,
        })
        marker.addListener('click', () => {
          infowindow.open(this.map, marker)
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
