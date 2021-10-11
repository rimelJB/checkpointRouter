import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player'

// import "./Description.css";

const Description = (props) => {
  const movie = props.location.state.movie;

  return (
    <>
      <Card>
        <Container className="container">
          <Row>
            <Card.Header>
              <Card.Title>
                <h1>{movie.name}</h1>
              </Card.Title>
            </Card.Header>
          </Row>
          <Row>
            <Col sm={7} style={{ position: "relative" }}>
              <div>
                <Card.Body>
                <ReactPlayer url={movie.trailer} />
                </Card.Body>
              </div>
            </Col>
            <Col sm={5} style={{ position: "relative" }}>
              <div className="description-layout">
                <div>
                  <h3>Description</h3>
                  <hr />
                  <h4>{movie.description}</h4>
                </div>
              </div>
              <div className="return-home-btn">
                <Link to="/">
                  <img
                    className="return-home-logo"
                    src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                    alt="..."
                    style={{ width: "100px" }}
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Description;
