import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Movie from "../Movie";
import { fetchMovies } from "../../api";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "50%",
    margin: "10px auto"
  },
  Movie: {
    display: "none"
  }
});

class ListMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  render() {
    if (!this.state.data) return "Data loading";
    return (
      <React.Fragment>
        {this.state.data.map(e => {
          console.log(e);
          return <Movie title={e.title} id={e.id} key={e.id} tomatoScore={e.tomatoScore} popcornScore={e.popcornScore} tomatoIcon={e.tomatoIcon} popcornIcon={e.popcornIcon} realeaseDate={e.theaterReleaseDate}/>;
        })}
      </React.Fragment>
    );
  }
  async componentDidMount() {
    this.setState({ data: await fetchMovies() });
  }
}

export default withStyles(styles)(ListMovie);
