import React from 'react';
import {Link} from "react-router-dom";
import "./MovieDetail.scss"

const MovieDetail = () => {
    return (
        <div className="movie-detail">
            <Link to="/">
                Home
            </Link>
        </div>
    );
};

export default MovieDetail;
