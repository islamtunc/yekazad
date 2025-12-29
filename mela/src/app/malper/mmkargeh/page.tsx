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
            Zêhniya Makinê û Xizmetên ML
          </Card.Title>
          <Row className="g-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Çarên ML bo biznes û malper
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    Zêhniya makinê (Machine Learning) dikare hûrguliyên xebatê we
                    zêde bike, kararên otomatik bike û tecrûbeya bikarhêneran
                    baştir bike. Em modelên taybetî amade dikin, data we
                    pêvajoyê bikar anîn, û modelan li prodüksiyonê deploy dikin.
                    <br />
                    <br />
                    <strong>Xizmetên me</strong>
                    <br />
                    • Pêşkeftina modelên ML/Deep Learning (classification, regression, NLP)
                    <br />
                    • Etîketkirina data û preprocessing
                    <br />
                    • Transfer learning û fine-tuning bo modelên taybetî
                    <br />
                    • Deploy kirin: API inference, containerization, serverless
                    <br />
                    • Optimîzasyon: quantization, pruning, latency reduction
                    <br />
                    • Monitoring û retraining bi data nû
                    <br />
                    <br />
                    <strong>Çawa dest pê bikin?</strong>
                    <br />
                    1) Armanca projeyê bizanin (kevneşop, predict, recommend, NLP).  
                    2) Data we bi me re parve bikin — em quality check û preprocessing dikin.  
                    3) Prototip û demo model — testên performans û metrics pêşkêş dikin.  
                    4) Deploy û maintenance: API an model li ser server/container ve amade dikin û monitoring çêkin.
                    <br />
                    <br />
                    Ji bo pêveka destpêkê formê li malperê tije bikin an bi rastî re têkilî daynin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=800&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Nimûne: Machine Learning"
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