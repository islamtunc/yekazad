// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>
            Robotîk û Zêhniya Sernivîsî (AI)
          </Card.Title>
          <Row className="g-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Çarên robotîk û têkildana AI bo biznes û pêşkeftin
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    Em li Yekazad Software Center robotîk û zêhniya sernivîsî
                    (AI) têkildî dikin da ku otomasyon, kontrol û percepîsyon
                    bo projeyan xwe bidin. Xizmetên me ji prototîp, simulasyon,
                    heta deploy û maintainansê hatine amadekirin.
                    <br />
                    <br />
                    <strong>Xizmetên me</strong>
                    <br />
                    • Rêkeftina robotan (industrial, mobile, AGV/AMR) û
                    integrasyona hardware û software (sensors, actuators, PLC)  
                    • Perception bi Computer Vision û ML (object detection, tracking, SLAM)  
                    • Kontrol: trajectory planning, motion control, feedback loops  
                    • Simulasyon & prototyping (ROS, Gazebo, Web‑based demos)  
                    • Edge AI & inference: modelên ML li ser cihazên embeded an edge  
                    • Robotics Process Automation (RPA) bo workflow û backend tasks  
                    • Deploy, monitoring û maintenance ya robotan û modelan  
                    • Konsultasyon li ser architecture, safety & compliance
                    <br />
                    <br />
                    <strong>Çawa em dikarin alîkarî bikin?</strong>
                    <br />
                    1) Pêş-dîtin: armanc, pergal û constraint-an nîn bikevin.  
                    2) Proof-of-Concept: prototîp û testên simulekirin pêşkêş dikin.  
                    3) Integrasyon: hardware, sensors, backend API û AI modelan tevger dikin.  
                    4) Deploy & Support: production deploy, monitoring, û piştgirî domdar.
                    <br />
                    <br />
                    Heke hûn dixwazin projeya robotîk an AI-ê bi me re baş bikin,
                    formê li malperê tije bikin an rê directe-ê bi me re têkilî daynin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1581093588401-5c4b8f9f6b1a?auto=format&fit=crop&w=800&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Nimûne: robotîk û zêhniya sernivîsî"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default page;