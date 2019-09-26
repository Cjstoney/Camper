import React from "react";
import Navbar from '../components/Navbar/navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SavedPage.css'

import axios from 'axios';
import Searchbar from "../components/Searchbar/searchbar";

class SearchPage extends React.Component{
    constructor(){
        super()
        this.state={
            resource: null,
            error: ""
        }
    }

    searchTerm = (e) =>{
        e.preventDefault();
        let search = document.getElementById('search').value;
    
        //console.log('search value', search);
    
        axios.get(`s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/api/resources/${search}`)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ resource: res.data, error: "" });
            //console.log('results', res);
            })
            .catch(err => this.setState({ error: err.message }));
    
    }

    render(){
        //console.log('this.state', this.state.resource)
        let resource = this.state.resource ? ((
            <div className="resource">
                {
                    this.state.resource.map(function (e, idx, arr) {
                        //console.log('map',e);
                        
                        return (
                            
                            
                            <Card className="mainCard" key={e.id}style={{ width: '75%'}}>
                                <Card.Body>
                                <Card.Img  style={{maxWidth:"100px"}} variant="top" src={e.imgurl} />
                                    <Card.Title>{e.technology}</Card.Title>
                                    <Card.Text>{e.description}</Card.Text>
                                    <Button variant="primary" target="_blank" href={e.url}>Learn It</Button>
                                    <Button className="saveButton" style={{marginLeft:"10px"}} variant="primary" href="">Save</Button>
                                </Card.Body>
                            </Card>
                            

                        )
                    })
                }
            </div>
        ) ):(
            <br></br>
        )
        
        return(
            <div className="savedPageDiv">
                <Navbar />
                <br></br>
                <Searchbar 
                    searchTerm={this.searchTerm}
                />
                
                {
                    resource
                }

                
            </div>
        );
    }
}

export default SearchPage;