import React from "react";
import MovieHeader from "../../Components/MovieHeader";

class MovieDetail extends React.Component {
    state = {
        reviewList: null,
        filmDetail: null
    };

    componentDidMount() {
        // fetchDataHere

        const reviewList = [
                { user: "AnTran", content: "Good" },
                { user: "Nghminh", content: "Cool" }
            ],
            filmDetail = {
                title: "Venom", // response.title
                consensus: "OK", // response.
                adjustedScore: 4
            };
        this.setState({ reviewList, filmDetail });
    }

    render() {
        return (
            <div>
                <MovieHeader />
                <Review />
            </div>
        );
    }
}
