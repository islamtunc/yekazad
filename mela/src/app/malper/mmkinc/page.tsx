// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
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
            Ji bo Pêşkêşkeran & Developers — Contribute / Serlêdan
          </Card.Title>
          <Row className="g-4">
            {/* Naverok bo developers */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Hûrguliyên Contribute kirin
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    Em pêşkêş dikin codebase-a vekirî û rêbazên tevgerê bo
                    kesên ku dixwazin beşdar bîn. Hûn dikarin bi şopandinê
                    (fork) an jî branch xwe ya feature-ê dest pê bikin.
                    <br />
                    <br />
                    Rêbendanên sereke:
                    <br />
                    • Fork + branch: bikar bînin navê branch wekî
                    feat/<tema>-navê an fix/<issue>-navê.
                    <br />
                    • Test & lint: pêdivî ye ku hemî testên unit û lint
                    bêne derbas kirin. npm run test / npm run lint.
                    <br />
                    • PR: çekiyayek (Pull Request) bi şiroveya kurt û
                    referans bo issue-ê vekin. CI her PR-ê kontrol dike.
                    <br />
                    • Style: Em ESLint & Prettier têne karanîn. Ji kerema xwe
                    format bikin berî commit.
                    <br />
                    <br />
                    Çawa proje li localê bikevin:
                    <br />
                    1) git clone <repo-url>
                    <br />
                    2) cp .env.example .env && .env de vebijêrkên xwe danîn
                    <br />
                    3) npm install
                    <br />
                    4) npm run dev  (vewesta: Next.js / React app)
                    <br />
                    <br />
                    Heke hûn xwestin beşdarîya mezin bikin an jî projeya me bêjin,
                    ji kerema xwe pêşî issue biafirînin an re têkilî bikin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Asta ka bi şûna serlêdanê têkilî */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Serlêdan û Kar li Şirketê
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    Heke hûn dixwazin bi me re kar bikin:
                    <br />
                    • Şandina CV û projeyan: email@example.com an formê li
                    malperê tije bikin.
                    <br />
                    • Rolên hewce: Frontend (React/Next), Backend (Node/Next),
                    DevOps, Machine Learning, QA.
                    <br />
                    • Proses: pêş-sivîk => teknikî interview => test kod => peyman.
                    <br />
                    • Ji bo developers: portfolyoyên GitHub/GitLab û demo
                    projeyanê zêde bêne nirxandin.
                    <br />
                    <br />
                    Linkên girîng: CONTRIBUTING.md, CODE_OF_CONDUCT, README.
                    Ji bo hûnermendî û hûrguliyê, pêşniyar dikin ev belgeyan bixwînin
                    berî şandina PR an serlêdan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div style={{ maxWidth: "700px", width: "100%", marginTop: 20 }}>
        <Alert variant="info">
          Heke rêbaz an pirs hene, issue vekin an e-nameyê bi rê ve şandin.
        </Alert>
      </div>
    </div>
  );
}

export default page;