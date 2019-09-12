import React from "react";
import Navbar from '../components/Navbar/navbar';
import { Card, Button } from 'react-bootstrap/Card';
import Footer from '../components/Footer/footer';
import axios from 'axios';




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
                    this.state.post.map(function (technology, description, url) {

                        return (

                            <div style={{ margin: '100px' }}>
                                <a href={post.url}><h1>{post.technology}</h1>
                                    <h2>{post.description}</h2>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        ) : (
                <h1 >No resource listed at this point and time</h1>)

        return (
            <section className="ResourcesClass" id="ResourcesClass">
                <Navbar />
                <div>
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