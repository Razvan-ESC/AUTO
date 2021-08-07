import React, { useState, useEffect } from "react";
import { useBattery} from "react-use";
import {View, Text} from 'react-native';
import {Container, Row, Col, Card} from 'react-bootstrap';
//import QrReader from 'react-qr-reader'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Icon from 'react-native-vector-icons/Ionicons';

const Charging = () => {

    const [data, setData] = React.useState("Not Found");

    const BatteryStroke = ({ visible }) => (
        <div
            className={`battery-inner flex-fill ${
                visible ? "visibe" : "invisible"
            }`}
        ></div>
    );

    const [batteryStrokes, setBatteryStrokes] = useState(Array(5).fill(true));
    let currentStroke = 4;

    const batteryState = useBattery();

    useEffect(() => {
        let timer = null;

        //If battery is charging state. Animate strokes
        if (batteryState.charging) {
            setBatteryStrokes(Array(5).fill(false));

            //Start the timer
            timer = initChargingSequence();
        } else {
            //If not charging, calculate the total strokes based on the charge.
            calculateBatteryStrokes(batteryState.level);
        }

        //Clearing timer on unmout
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [batteryState]);

    const initChargingSequence = () =>
        setInterval(() => {
            if (currentStroke < 0) {
                currentStroke = 4;
                setBatteryStrokes(Array(5).fill(false));
                return;
            }

            setBatteryStrokes(strokes =>
                strokes.map((stroke, idx) =>
                    idx === currentStroke ? true : stroke
                )
            );

            currentStroke--;
        }, 1000);

    const calculateBatteryStrokes = level => {
        const batteryPercent = level * 100; //Battery percentage

        let totalStrokesCount = Math.ceil((batteryPercent * 5) / 100) - 1;

        setBatteryStrokes(
            Array(5)
                .fill(true)
                .map((d, i) => (i <= totalStrokesCount ? true : false))
                .reverse()
        );
    };

    if (!batteryState.isSupported) {
        return <h3>Nu este suportat device-ul</h3>;
    }

    if (!batteryState.fetched) {
        return <h3>Asteapta statusul</h3>;
    }

    let batteryPercent = Math.round(batteryState.level * 100);

    let batteryStatusClass = batteryState.charging
        ? "battery-charging"
        : batteryState.level * 100 > 20
        ? "battery-full"
        : "battery-empty";   
         

    return(
        <Container fluid>
            <Row>
                <Col lg="6" sm="12">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col className="offset-md-3 text-center" md="6">
                                <Card.Title as="h4">Scaneaza codul QR ca sa vizualizezi stadiul incarcarii</Card.Title>
                                </Col>
                            </Row>

                            <Row>
                                <BarcodeScannerComponent width={500} height={500} onUpdate={(err, result) => {
                                    if (result) setData(result.text);
                                    else setData("Not Found");
                                    }} />
                                <p>{data}</p>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>

                <Col lg="6" sm="12">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col className="offset-md-3 text-center" md="6">
                                <Card.Title as="h4">Status incarcare</Card.Title>
                                <h4></h4>
                                </Col>
                            </Row>
                            <Row>
                            <Col className="justify-content-center text-center" >
                            <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column battery-outer">

                                {batteryStrokes.map((stroke, idx) => (
                                    <BatteryStroke key={idx} visible={stroke} />
                                ))}  

                                <div className="battery-charging-indicator">
                                <Icon name="key" type="font-awesome" size={24} />
                                </div>
                            </div>
                            
                            </div> 

                            <div className="text-center">
                            <h4>Procentaj baterie: {batteryPercent}%</h4>
                                <div className="d-inline">
                                    {batteryPercent <= 20 && (
                                        <div className="d-inline-block mt-3 alert alert-danger">
                                            Bateria ta se descarca{" "}
                                            <strong>Conecteaza incarcatorul</strong> now
                                        </div>
                                    )}
                                    {batteryPercent > 20 && (
                                        <div className="d-inline-block mt-3 alert alert-success">
                                            Bateria ta este in stare:{" "}
                                            <strong> buna</strong>
                                        </div>
                                    )}
                                </div>
                            </div>                           
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row> 
      </Container>
    );
};


export default  Charging;