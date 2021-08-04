import React from "react";
import carpool from "./../assets/img/carpool.png";

// react-bootstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function Carpool() {
/*   const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "44.4397999";
    let lng = "26.1241396";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
    });


    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []); */
  return (
    <>
      <div className="rna-container">
        
      </div>

      <Container fluid>
        <Card>
          <Card.Body>
            <Row>
            <Col className=" justify-content-center offset-md-2 text-center" md="6">
                  <img src={carpool} alt="Carpool"/>
              </Col>
            </Row>
              <Row>
                <Col className="offset-md-3 text-center" md="6">
                  <Card.Title as="h4">Vezi cine este in apropiere</Card.Title>
                </Col>
              </Row>

          </Card.Body>
        </Card>
        
      </Container>

      <div className="map-container">
        <div id="map" /*ref={mapRef}*/></div>
      </div>
    </>
  );
}

export default Carpool;