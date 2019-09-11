import React from "react";
import Navbar from '../components/Navbar/navbar';
import Cards from "../components/Cards/Cards"
import Footer from '../components/Footer/footer';
import axios from 'axios';




class ResourceTypePage extends React.Component {
    state={
        post: null
    }

    componentDidMount(){
        let id = this.props.match.params.ResourceTypePage;
        console.log(id)
        axios.get("/api/resource/:"+id)
            .then(res =>{
                this.setState({
                    post: res.data
            })
            console.log(res)
        })


    }


    render() {


        return (
            <section className="ResourcesClass" id="ResourcesClass">
                <Navbar />
                
                {/* <h1 style={{margin: '100px'}}>{this.state.id}</h1> */}
                {/* <Cards /> */}
                <Footer />
            </section>
        )
    }
}
export default ResourceTypePage;