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
            Ewlekariya, Baxçûkî û Çareseriyên Nermalavê
          </Card.Title>
          <Row className="g-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Çarên ewlekariyê, baxçûkî û tamir a software
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    Wek Yekazad Software Center em xizmetên ewlekariyê, baxçûkî
                    (maintenance) û tamirê nermalavê pêşkêş dikin. Em alîkar in
                    ku pergala we ewlekirî, up-to-date û bi performansê bilind be.
                    <br />
                    <br />
                    <strong>Xizmetên me</strong>
                    <br />
                    • Audit û penetration testing (pentest) ji bo dîtina zaifiyên ewlekariyê  
                    • Patch management û nûvekirinên ewlekariyê (security updates)  
                    • Monitoring, logging û alerting bo nasîn û bersivdanê ya zû  
                    • Backup & disaster recovery — plan û test kirina recovery-ê  
                    • Bug fixing, code maintenance û performance optimizasyon  
                    • Incident response & forensic — lêkolîn û çareseriyên zû  
                    • Hardening & konfigurasyonên ewlekariyê (network, server, app)  
                    • Destûr û piştgirî: remote an on-site tamir û servis
                    <br />
                    <br />
                    <strong>Çawa dest pê bikin?</strong>
                    <br />
                    1) Armanca we û girîngiyên ewlekariyê diyar bikin.  
                    2) Em assessment (audit) dikarin — raporek hûrgulî pêşkêş dikin.  
                    3) Plan û peyman: roadmap, priorîte û teklîf amade dikin.  
                    4) Implementasyon: patch, fix, deploy û testên pen-test.  
                    5) Monitoring û support: SLA, backups û nûvekirinên domdar.
                    <br />
                    <br />
                    Ji bo destpêkê formê li ser malper tije bikin an bi me re rastî
                    têkilî daynin — em tevlîhevîyên we zû çêkin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Ewlekariya nermalavê û baxçûkî"
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