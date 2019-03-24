import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";


import "./product.css";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    leftIcon: {
        marginRight: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    },
    iconSmall: {
        fontSize: 20
    },
    card: {
        maxWidth: 345,
        margin: 5
    },
    media: {
        // ⚠️ object-fit is not supported by IE11.
        //  objectFit: "cover"
    },

});

class Product extends Component {
    state = {
        url: "https://picsum.photos/400/300/?image=1"
    };

    constructor() {
        super();

    }

    render(props) {
        const { classes } = this.props;
        const { detail } = this.props;
        console.log(this.props);
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        height="240"
                        image={detail.best_book[0].image_url[0]}
                        title={detail.best_book[0].title[0]}
                    />
                    <CardContent>
                        <Typography component="p">
                            {detail.best_book[0].title[0]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="action">
                                      <Button color="primary" variant="contained" onClick={()=> this.props.select(detail)}>
                            <VisibilityIcon />
                            <label style={{ cursor: "pointer" }}>&nbsp;View Details</label>
                        </Button>
              
                </CardActions>
            </Card>
        );
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
