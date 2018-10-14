import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './movie.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: "50%",
        margin:"10px auto",
    },
    itemHovered: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: "100%",
    }
});
class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <Paper className={this.props.classes.root} elevation={1} style={{}}>
                    <Typography variant="h5" component="h3">
                    {this.props.title}
                    </Typography>
                    <Typography component="p">
                    <span>{this.props.tomatoScore}
                    - </span>
                    <span>{this.props.popcornScore} - </span>
                    <span>{this.props.realeaseDate}</span>
                    </Typography>
                </Paper>
            );
    }
}

export default withStyles(styles)(Movie);