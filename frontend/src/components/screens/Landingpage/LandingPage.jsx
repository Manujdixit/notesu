import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./LandingPage.css";
import Button from "react-bootstrap/esm/Button";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">
                Welcome to <span className="highlight">Notes</span>
              </h1>
              <p className="subtitle">
                A <span className="highlightg">Safe</span> place for all your
                notes.
              </p>
            </div>
            <div className="buttonmainContainer">
              <div className="buttonContainer">
                <a href="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
