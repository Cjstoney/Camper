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
        console.log(id)
        axios.get("http://localhost:3001/api/resource/" + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(this.state.post)
                // console.log(res.data)
            })
    }
    render() {
        // console.log(this.state.post.technology)
        const post = this.state.post ? (
            <div className="post">
                {
                    <div style={{ margin: '100px' }}>
                        <a href={this.state.post[0].url}><h1>{this.state.post[0].technology}</h1>
                            <h2>{this.state.post[0].description}</h2>
                        </a>
                    </div>
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