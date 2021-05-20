import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from "./starRating";
const MovieCard = ({movieCard}) => {
  
  return (
    <div style={{ margin: "50px", paddingTop: "20px" }}>
      <Card style={{ width: "18rem" ,borderStyle:'outset',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'violet',borderRadius:'30px'}}>
        <Card.Img variant="top" src={movieCard.src}  style={{ height: "25rem", width:'18rem',borderRadius:'30px' }} />
        {/* <StarRating rate={movieCard.rating} /> */}
        <span>{"".padStart(movieCard.rating,"⭐")}</span>
        <Card.Body style={{ height: "200px" }}>
          <Card.Title style={{fontFamily:'Abril Fatface'}}>{movieCard.title}</Card.Title>
          <Card.Text style={{ fontSize: "14px", textAlign: "center" }}>
            {movieCard.text}
            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;