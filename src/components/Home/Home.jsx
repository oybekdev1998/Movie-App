import React, {useEffect}  from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import MovieListing from "../MovieListing/MovieListing"
import "./Home.scss"
import { addMovies } from '../../features/movies/movieSlice';


const Home = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMovies = async () => {
            const movieText = 'Harry'
            const responce = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f3764473&t=${movieText}&type=movie`).catch((e) => {console.log(e.message)})
            dispatch(addMovies(responce.data))
            console.log(responce.data);
        }
    
        fetchMovies()
    }, [])

    return (
        <div className="home">
            <MovieListing/>
        </div>
    );
};

export default Home;
