import React from "react";
import Navbar from '../components/Navbar/navbar';
import {Card, Button} from 'react-bootstrap/Card';
import Footer from '../components/Footer/footer';
import axios from 'axios';




class ResourceTypePage extends React.Component {
    state={
        post: null
    }
    
    componentDidMount(){
        let id = this.props.match.params.ResourceTypePage;
        console.log(id)
        axios.get("http://localhost:3001/api/resource/"+id)
        .then(res =>{
            this.setState({
                post: res.data
            })
            console.log(this.state.post)
            // console.log(res.data)
        })
    } 
    renderCards = () => {    
        return this.state.post.map(resource =>
        
            <Card style={{ width: '10rem', margin: '100px 0px 20px 50px' }}>
          <Card.Img style={{maxHeight: '200px'}} variant="top" src={resource.technology} />
          <Card.Body>
            <Card.Title>{resource.technology}</Card.Title>
            <Card.Text>{resource.description}</Card.Text>
            <Button variant="primary" href={resource.url}>Learn It!</Button>
          </Card.Body>
        </Card>
        )}
    render() {


        return (
            <section className="ResourcesClass" id="ResourcesClass">
                <Navbar />
                <div>
                {this.renderCards()}
                </div>
                <Footer />
            </section>
        )
    }
}
export default ResourceTypePage;