import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Detail extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props);
    }

    render(props) {
        return (
            <div className="content">
                <Button color="primary" variant="contained" className="back-btn" onClick={()=>this.props.show()}>
                <label style={{ cursor: "pointer" }}>&nbsp;Back</label>
                </Button>
                    <div className="book-details">
                        <div className="detail">
                            <img src={this.props.details.best_book[0].image_url[0]} className="detail-image" />
                        </div>
                        <div className="detail">
                            <h2>{this.props.details.best_book[0].title[0]}</h2>
                            <h3>by {this.props.details.best_book[0].author[0].name[0]}</h3>
                            <h4>Average Ratings: {this.props.details.average_rating[0]} </h4>
                        </div>
                    </div>
            </div>
                );
            }
        }
        
        export default Detail;
