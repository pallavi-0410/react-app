import React, { Component } from "react";
import ProductService from "../services/product-service";
import Product from "../components/Product";

const parseString = require('xml2js').parseString;

class Home extends Component {


    constructor() {
        super();
        this.service = new ProductService();

    }

    componentDidMount = () => {

    }

    selected = (detail) =>{
        console.log(detail);
        this.props.selectedBook(detail);
    };



    render() {
        return (
            <div className="content">
                {
                    this.props.books.length === 0 ? <h1> Search for a book </h1> : this.props.books[0].noResults ? <h1>No results</h1> : ( this.props.books.map((detail, index) => {   
                        return <Product key={index} detail={detail} select={this.selected} />
                    }))
                }
            </div>
        );
    }
}

export default Home;
