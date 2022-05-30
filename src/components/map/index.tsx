import React from 'react'
import Container from './styles'

const Map = () => {
  return (
    <Container>
      <div className="map">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_canvas"
              src="https://maps.google.com/maps?q=Florian%C3%B3polis&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
            />
            <a href="https://fmovies-online.net">fmovies</a>
            <br />
            <a href="https://www.embedgooglemap.net">
              google maps link generator
            </a>
          </div>
        </div>
        <div className="close-map">
          <h6>Close Map</h6>
        </div>
      </div>
    </Container>
  )
}

export default Map
