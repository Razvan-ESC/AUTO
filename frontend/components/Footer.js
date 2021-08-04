
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#home" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#carpool" onClick={(e) => e.preventDefault()}>
                  Carpool
                </a>
              </li>
              <li>
                <a href="#appointment" onClick={(e) => e.preventDefault()}>
                  Rezervare
                </a>
              </li>
              <li>
                <a href="#charge" onClick={(e) => e.preventDefault()}>
                  Incarcare
                </a>
              </li>
              <li>
                <a href="#maps" onClick={(e) => e.preventDefault()}>
                  Harta
                </a>
              </li> 
              <li>
                <a href="#settings" onClick={(e) => e.preventDefault()}>
                  Setari
                </a>
              </li>                           
            </ul>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
