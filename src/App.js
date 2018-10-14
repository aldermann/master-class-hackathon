import React, { Component } from "react";
import Review from "./Components/Review";
import MovieHeader from "./Components/MovieHeader";
import "./App.css";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Review
                    reviewList={[
                        { user: "An Tran", content: "Cool" },
                        { user: "An Tran", content: "Cool" }
                    ]}
                />
                <MovieHeader/>
            </div>
        );
    }
}

export default App;
