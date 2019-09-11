import React from "react";
import Navbar from '../components/Navbar/navbar';
import Cards from "../components/Cards/Cards"
import Footer from '../components/Footer/footer';




class ResourceTypePage extends React.Component {
    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params
    }


    render() {


        return (
            <section className="ResourcesClass" id="ResourcesClass">
                <Navbar />
                {/* <Cards /> */}
                <Footer />
            </section>
        )
    }
}
export default ResourceTypePage;