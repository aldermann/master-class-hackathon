import React from "react";
import Paper from "../Paper";

export default function Review({ reviewList }) {
    return (
        <div style={{ width: "50%", margin: "10px auto" }}>
            {reviewList.map(review => (
                <Paper style={{ width: "100%", textAlign: "left" }}>
                    <h3>User {review.user} said:</h3>
                    <p>{review.content}</p>
                </Paper>
            ))}
        </div>
    );
}
