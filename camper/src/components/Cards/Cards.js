import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";
import data from "../../Data/html";


class Cards extends React.Component{
  state= {
    data
  }

  renderCards = () => {
return this.state.data.map(resource =>

    <Card style={{ width: '10rem', margin: '100px 0px 20px 50px' }}>
  <Card.Img style={{maxHeight: '200px'}} variant="top" src={resource.img} />
  <Card.Body>
    <Card.Title>{resource.title}</Card.Title>
    <Card.Text>{resource.desc}</Card.Text>
    <Button variant="primary" href={resource.link}>Learn</Button>
  </Card.Body>
</Card>
)
  }

    render(){
        return(
          //bla bla keep this//
          <div className="cardDiv">
            <div class="row">
        {this.renderCards()}
        </div>
        </div>
        )
    }
}
export default Cards;