import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function PaperSheet(props) {
    const { className, classes, children, style} = props;
    return (
        <div className={className} style={style}>
            <Paper className={classes.root} elevation={1}>
                {children}
            </Paper>
        </div>
    );
}

export default withStyles(styles)(PaperSheet);