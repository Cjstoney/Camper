import React from "react";
import Navbar from '../components/Navbar/navbar';
import Footer from "../components/Footer/footer";
// import Axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SavedPage.css'

import axios from 'axios';

class SavedPage extends React.Component{
    constructor(){
        super()
        this.state={
            resource: null,
            auth: false
        }
    }

    // Create a function that will run in her to do two seperate queries
    
    componentDidMount(){
        axios.get("mysql://x60smffjgf3t4k1d:af7pfywc9p11tuqf@s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lif2wfoqiewjhmg3/api/resources/saved")
        .then(res=>{
            console.log("res", res.data[0])
            this.setState({
                resource: res.data[0]
            })
        })
        }

        render(){
            // console.log('this.state', this.state.resource)
            let resource = this.state.resource ? ((
                <div className="resource">
                    {
                        this.state.resource.map(function (e, idx, arr) {
                            // console.log(e)
                            
                            return (
                                
                                
                                <Card className="mainCard" key={e.id}style={{ width: '75%'}}>
                                    {/* <Card.Img style={{maxHeight: '200px'}} variant="top" src={resource.img} /> */}
                                    <Card.Body>
                                    <Card.Img  style={{maxWidth:"100px"}} variant="top" src={e.imgurl} />
                                        <Card.Title>{e.technology}</Card.Title>
                                        <Card.Text>{e.description}</Card.Text>
                                        <Button variant="primary" target="_blank" href={e.url}>Learn More</Button>
                                    </Card.Body>
                                </Card>
                                
    
                            )
                        })
                    }
                </div>
            ) ):(
                <h1>You have not saved any resources yet.</h1>
            )
            
            return(
                <div  className="savedPageDiv">
        <Navbar />

            <h1 style={{marginTop: '100px'}}>Your Saved Resources</h1>
            <br></br>
            {
                resource
            }
        <Footer />
        </div>
    );
}
}

export default SavedPage;