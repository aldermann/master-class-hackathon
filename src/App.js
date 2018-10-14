import React, { Component } from "react";
import "./App.css";
import IndexPage from "./Layouts/IndexPage";
import { connect } from "react-redux";

class App extends Component {
    render() {
        if (!this.props.state) return <IndexPage />;
    }
}
const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(App);
