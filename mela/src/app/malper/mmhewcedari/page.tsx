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
        padding: "12px",
      }}
    >
      <Card
        style={{
          opacity: 0.98,
          color: "black",
          textAlign: "center",
          maxWidth: "640px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.4rem" }}>
            Sepandina Mobîl û Xizmetên Nermalavê
          </Card.Title>
          <Row className="g-3">
            {/* Çep / mobîl ser rêzê derdikeve */}
            <Col xs={12} className="mb-2">
              <Card style={{ textAlign: "left" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.05rem" }}>
                    Çarên mobîl bo kar û bazirganî
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.98rem", lineHeight: 1.5 }}>
                    Wek Yekazad Software Center em sepandinên mobîl ji bo Android û
                    iOS amade dikin. Xizmetên me bi responsîvîtiyê, perfomance û
                    tecrûbeya bikarhênerê (UX) têne çêkirin.
                    <br />
                    <br />
                    <strong>Xizmetên mobîl</strong>
                    <br />
                    • Sepandina serhêl a mobîl (Native & cross-platform)  
                    • Integrasyona API û backend (Node, Next.js, REST/GraphQL)  
                    • Têkildana payment û auth (OAuth, JWT, payment gateways)  
                    • Pêşkêşkirina CI/CD, test û deploy (Play Store / App Store)  
                    • Dema piştgirî û nûvekirinên amûrî (maintenance & updates)
                    <br />
                    <br />
                    <strong>Çawa dest pê bikin?</strong>
                    <br />
                    1. Armancên xwe bêje: kîjan taybetmendî hene, hedef çi ye?  
                    2. Pêdivîyên teknîkî û peyman diyar bikin — em plan û demjimarê amade dikin.  
                    3. Prototip û test: demo û testên bikarhênerî pêşkêş dikin.  
                    4. Deploy û monitoring: app li firoşgehan weşandin û performans kontrol kirin.
                    <br />
                    <br />
                    Ji bo destpêkê formek li malperê tije bikin an jî rastî bi me re têkilî daynin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Wêne - mobîl jêr nîşan dide */}
            <Col xs={12} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                style={{
                  border: "4px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                }}
                alt="Nimûne: sepandina mobîl"
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