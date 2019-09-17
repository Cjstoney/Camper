import React from "react";
import Navbar from '../components/Navbar/navbar';
import Footer from "../components/Footer/footer";
import Axios from "axios";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

import axios from 'axios';

class SavedPage extends React.Component{
    constructor(){
        super()
        this.state={
            resource: null,
            auth: false
        }
    }

    componentDidMount(){
        axios.get("/api/resources/saved")
        .then(res=>{
            this.setState({
                resource: res.data
            })
        })
        }

        render(){
            console.log(this.state.resource)
            let resource = this.state.resource ? ((
                <div className="resource">
                    {
                        this.state.resource.map(function (e, idx, arr) {
                            console.log(e)
                            
                            return (
                                
                                
                                <Card className="mainCard" key={e.id}style={{ width: '75%'}}>
                                    {/* <Card.Img style={{maxHeight: '200px'}} variant="top" src={resource.img} /> */}
                                    <Card.Body>
                                    <Card.Img  style={{maxWidth:"100px"}} variant="top" src={e.imgurl} />
                                        <Card.Title>{e.technology}</Card.Title>
                                        <Card.Text>{e.description}</Card.Text>
                                        <Button variant="primary" href={e.url}>Learn It</Button>
                                        <Button style={{marginLeft:"10px"}} variant="primary" href={e.url}>Save</Button>
                                    </Card.Body>
                                </Card>
                                
    
                            )
                        })
                    }
                </div>
            ) ):(
                <h1>You have not saved anyresources yet.</h1>
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