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
import ForYouFeed from "./ForYouFeed";

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
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>
            Xizmetên Malper û Nermalav
          </Card.Title>
          <Row className="g-4">
            {/* Çep Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Bi çarên profesyonel pergala dijîtala xwe pêşve bîne
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Wek Yekazad Software Center em malperên şîrketî, çarên
                    firotina serhêl, sepandinên mobîl û têkildanên zêhniya
                    sernavîn (AI) pêşkêş dikin. Projeyên me responsive ne,
                    li ser performance fokus dikin û bi SEO re hevbe.
                    <br />
                    <br />
                    <strong>Xizmetên me</strong>
                    <br />
                    • Pêşkeftina malperê (React, Next.js, têkildanên CMS)
                    <br />
                    • Pêşkeftina sepandina mobîl (Android / iOS)
                    <br />
                    • Çarên firotina serhêl û têkildanên payment
                    <br />
                    • Taybetmendiyên piştgirîkirî ji AI û automatîzasyon
                    <br />
                    • Xizmeta domdar, ewlekariyê û optimîzasyona performance
                    <br />
                    <br />
                    <strong>Çawa dest pê bikin?</strong>
                    <br />
                    Armancên projeyê xwe bi me re parve bikin; piştî anîlîza
                    pêdivîyan û peymanê em zû dest bi pêşkeftinê dikin. Em
                    mobîl-hez û barkirina zû pêşî dikarin da ku tecrûbeya
                    bikarhêneran baş be.
                    <br />
                    <br />
                    Ji bo peyam û teklîf, li ser malper formê tije bikin an
                    rastî bi me re têkilî daynin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Rast Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1526378725407-9d3b7d4d1b3b?auto=format&fit=crop&w=800&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Nîşanî pêşkeftina malperê"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Nivîsar/flux */}
      <div style={{ maxWidth: "900px", width: "100%", marginTop: 20 }}>
        <ForYouFeed />
      </div>
    </div>
  );
}

export default page;