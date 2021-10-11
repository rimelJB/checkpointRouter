import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import "../Components/MovieCard.css";

export default function NavBar({
  nameSearch,
  NameSearch,
  ratingSearch,
  RatingSearch,
}) {
  const handleChange = (event) => NameSearch(event.target.value);
  const ratingChanged = (e) => {
    RatingSearch(e);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Navbar className="Navex" expand="lg" sticky="top">
      <h1
        style={{
          fontWeight: "bold",
          marginLeft: "150px",
          color: "white",
          fontSize: "2em",
          fontStyle: "oblique",
        }}
      >
        MOVIE APP
      </h1>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <div
          style={{
            marginLeft: "400px",
            width: "700px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Place a Movie Title"
              className="mr-2"
              aria-label="Search"
              onChange={handleChange}
              style={{ width: "250px" }}
              value={nameSearch}
            />
          </Form>
          <div
            className="rating-by-stars"
            style={{
              marginLeft: "50px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span>
              <i
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "1em",
                  fontStyle: "oblique",
                }}
              >
                Search by Rating
              </i>
            </span>

            <ReactStars
              count={6}
              onChange={ratingChanged}
              size={20}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={ratingSearch}
            />
          </div>
          <Button
            variant="outline-secondary"
            style={{ marginLeft: "20px" }}
            onClick={refreshPage}
          >
            Reset
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
