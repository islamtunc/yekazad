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

function BikarhenerPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
     

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Java Hîn Bûn</Card.Title>
              <Card.Text>Java fêr bûn — dersan an nimûneyan temaşe an rêveberî bikin.</Card.Text>
              <Button variant="primary" href="/mmavahi">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Rûpela Dersan</Card.Title>
              <Card.Text>Dersan temaşe an rêveberî bikin.</Card.Text>
              <Button variant="primary" href="/mmkinc">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Xizmetan</Card.Title>
              <Card.Text>Rûpela xizmetan temaşe an rêveberî bikin.</Card.Text>
              <Button variant="primary" href="/mmkargeh">
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
              <Card.Text>Referansan temaşe an rêveberî bikin.</Card.Text>
              <Button variant="primary" href="/mmwesayit">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Bo Pêşkeftkaran</Card.Title>
              <Card.Text>Seranserên pêşkeftkaran temaşe an rêveberî bikin.</Card.Text>
              <Button variant="primary" href="/mmkedkar">
                Herin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Rêveberiya Malperê</Card.Title>
              <Card.Text>Malperê temaşe an rêveberî bikin.</Card.Text>
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

export default BikarhenerPage;