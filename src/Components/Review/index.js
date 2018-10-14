import React from "react";
import Paper from "../Paper";

export default function Review({ reviewList }) {
    return (
        <div style={{width: "80%"}}>
            {reviewList.map(review => (
                <Paper style={{margin: "10px", textAlign: "left"}}>
                    <h3>User {review.user} said:</h3>
                    <p>{review.content}</p>
                </Paper>
            ))}
        </div>
    );
}