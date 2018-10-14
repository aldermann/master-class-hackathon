import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
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
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    this.props.dispatch({
      type: "CLICK",
      value: this.props.id,
      name: "idCurrent"
    });
  }
  render() {
    return (
      <Paper
        onClick={this.handleMouseOver}
        className={this.props.classes.root}
        elevation={1}
      >
        <Typography variant="h5" component="h3">
          {this.props.title}
        </Typography>
        <Typography component="p">
          <Icon type={this.props.tomatoIcon} size={16}/>
          {this.props.tomatoScore} - <Icon type={this.props.popcornIcon} size={16} />
          {this.props.popcornScore} - {this.props.realeaseDate}
        </Typography>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(withStyles(styles)(Movie));
