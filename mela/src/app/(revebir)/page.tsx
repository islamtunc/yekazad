// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// Subhanallah, Elhamdulillah, Allahu Ekber, La ilahe illallah
// Estağfirulllah El-Azim
"use client"
import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
     

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Rûpela Hilberan</Card.Title>
              <Card.Text>Rûpela xwarinên sportî rêveberî an temaşe bikin.</Card.Text>
              <Button variant="primary" href="/web">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Rûpela Dersan</Card.Title>
              <Card.Text>Rûpela dersan rêveberî an temaşe bikin.</Card.Text>
              <Button variant="primary" href="/perwerde">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Xizmetan</Card.Title>
              <Card.Text>Rûpela xizmetan rêveberî an temaşe bikin.</Card.Text>
              <Button variant="primary" href="/jiriyasuni">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Referansan</Card.Title>
              <Card.Text>Rûpela referansan rêveberî an temaşe bikin.</Card.Text>
              <Button variant="primary" href="/robotik">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Bo Pêşkeftkaran</Card.Title>
              <Card.Text>Rûpela seranserên pêşkeftkaran rêveberî an temaşe bikin.</Card.Text>
              <Button variant="primary" href="/pesdebir">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Rêveberiya Malperê</Card.Title>
              <Card.Text>Malperê rêveberî an temaşe bikin.</Card.Text>
              <Button variant="primary" href="/malper">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;