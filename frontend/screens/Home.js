
import React from 'react';
import {View, Text, Button} from 'react-native';
import {DrawerActions } from '@react-navigation/native';
import ChartistGraph from "react-chartist";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TableScrollbar from 'react-table-scrollbar';
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const percentage = 66;

function Home() {
  return (
    <>

      <Container fluid>
        <Row>
          <Col lg="4" sm="4">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "turquoise",
                          trailColor: "light-grey"
                        })}
                      />                 
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  Current Week
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="4">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                  <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "red",
                          trailColor: "light-grey"
                        })}
                      />  
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  Last Week
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="4">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                  <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "indigo",
                          trailColor: "light-grey"
                        })}
                      />  
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  Last Month
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Statistica</Card.Title>
                <p className="card-category">Date din ultimele 24 de ore</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type='Bar'
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Eticheta 1 <i className="fas fa-circle text-danger"></i>
                  Eticheta 2 <i className="fas fa-circle text-warning"></i>
                  Eticheta 3
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Reactualizata acum x minute
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Top utilizatori</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              <TableScrollbar rows={9}> 
                <Table className="table-hover table-striped">
                  <tbody>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>36,738</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>23,789</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>56,142</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>38,735</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>63,542</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                    <tr>
                      <td><i className="fas fa-user"></i></td>
                      <td>Flavia Barbu</td>
                      <td>78,615</td>
                    </tr>
                  </tbody>
                </Table>
              </TableScrollbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}


export default Home;