import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Icon from "../Icon";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "50%",
    margin: "10px auto"
  }
});
class Movie extends React.Component {
  render() {
    return (
      <Paper
        onMouseEnter={this.handleMouseOver}
        className={this.props.classes.root}
        elevation={1}
      >
        <Typography variant="h5" component="h3">
          {this.props.title}
        </Typography>
        <Typography component="p">
          <Icon type={this.props.tomatoIcon} />
          {this.props.tomatoScore} - <Icon type={this.props.popcornIcon} />
          {this.props.popcornScore} - {this.props.realeaseDate}
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Movie);
