import React from "react";
import { fetchMovies } from "../../api";

export default class IndexPage extends React.Component {
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
          return <ItemMovie title={e.title} id={e.id} key={e.id} />;
        })}
      </React.Fragment>
    );
  }
  async componentDidMount() {
    this.setState({ data: await fetchMovies() });
  }
}

function ItemMovie({ title, id, popcornScore, tomatoScore, timeRelease }) {
  return <div>{title}</div>;
}
