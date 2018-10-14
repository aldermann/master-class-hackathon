import React from "react";
import MovieHeader from "../../Components/MovieHeader";
import Review from "../../Components/Review";
export default class MovieDetail extends React.Component {
    state = {
        reviewList: [
            { user: "AnTran", content: "Good" },
            { user: "Nghminh", content: "Cool" }
        ],
        filmDetail: {
            title: "Venom", // response.title
            consensus: "OK", // response.ratingSummary.consensus
            posterImage: "", // response.posters.thumbnail
            popcornScore: "89", // response.ratingSummary.audience.meterScore
            tomatoScore: "30" // response.ratingSummary.allCritics.meterValue
        }
    };

    componentDidMount() {
        // fetchDataHere

        const reviewList = [
                { user: "AnTran", content: "Good" },
                { user: "Nghminh", content: "Cool" }
            ], // response.reviews.reviews.map (each => {return {content: each.quote, user: each.critic.name}})
            filmDetail = {
                title: "Venom", // response.title
                consensus: "OK", // response.ratingSummary.consensus
                posterImage: "", // response.posters.thumbnail
                popcornScore: "89", // response.ratingSummary.audience.meterScore
                tomatoScore: "30" // response.ratingSummary.allCritics.meterValue
            };
        this.setState({ reviewList, filmDetail });
    }

    render() {
        return (
            <div>
                <MovieHeader filmDetail={this.state.filmDetail}/>
                <Review reviewList={this.state.reviewList}/>
            </div>
        );
    }
}
