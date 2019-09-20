import React from "react";
import Navbar from '../components/Navbar/navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer/footer';
import axios from 'axios';
import './ResourceTypePage.css'
// import html


class ResourceTypePage extends React.Component {
    constructor() {
        super()
        this.state = {
            post: null
        }
    }


    componentDidMount() {
        let id = this.props.match.params.ResourceTypePage;
        // console.log(id)
        axios.get("http://localhost:3001/api/resource/" + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                
            })
    }
    render() {
        console.log(this.state.post)
        let post = this.state.post ? (
            <div className="post">
                {
                    this.state.post.map(function (e, idx, arr) {
                        console.log(e)
                        
                        return (
                            
                            
                            <Card className="mainCard" key={e.id}style={{ width: '75%'}}>
                                {/* <Card.Img style={{maxHeight: '200px'}} variant="top" src={resource.img} /> */}
                                <Card.Body>
                                <Card.Img  style={{maxWidth:"100px"}} variant="top" src={e.imgurl} />
                                    <Card.Title>{e.technology}</Card.Title>
                                    <Card.Text>{e.description}</Card.Text>
                                    <Button variant="primary" target='_blank' href={e.url}>Learn</Button>
                                    <Button className="saveButton" style={{marginLeft:"20px"}} variant="primary" href="">Save</Button>
                                </Card.Body>
                            </Card>
                            

                        )
                    })
                }
            </div>
        ) : (
                <h1 >No resource listed</h1>)

        return (
            <section className="ResourcesClass" id="ResourcesClass">
                <Navbar />
                <div className='resourceCardContainer'>
                    {
                        post
                    }
                </div>
                <Footer />
            </section>
        )
    }
}

export default ResourceTypePage;