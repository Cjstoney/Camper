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
                // console.log(this.state.post)
                // console.log(res.data)
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
                            

                            <Card key={e.id}style={{ width: '100%' }}>
                                {/* <Card.Img style={{maxHeight: '200px'}} variant="top" src={resource.img} /> */}
                                <Card.Body>
                                <Card.Img style={{size: '20%'}} variant="top" src={e.imgurl} />
                                    <Card.Title>{e.technology}</Card.Title>
                                    <Card.Text>{e.description}</Card.Text>
                                    <Button variant="primary" href={e.url}>Learn It!</Button>
                                </Card.Body>
                            </Card>
                            

                        )
                    })
                }
            </div>
        ) : (
                <h1 >No resource listed at this point and time</h1>)

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