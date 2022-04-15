import React, {useState} from 'react';
import user from '../../images/user.png'
import "./Header.scss"
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice";
import {useDispatch} from "react-redux";
const Header = () => {
    const [trem, setTrem] = useState('')
    const dispatch = useDispatch();
    function submitHandler(e) {
        e.preventDefault()
        if (trem === '') return alert('Please enter search trem')
        dispatch(fetchAsyncMovies(trem))
        dispatch(fetchAsyncShows(trem))
        setTrem('')
    }

return (
        <div className="header">
                <div className="logo">Movie App</div>
                <div className='search-bar'>
                    <form onSubmit={submitHandler}>
                        <input
                            className="search-input"
                            value={trem}

                            placeholder='Search Movies and Shows'
                            onChange={(e) => setTrem(e.target.value)}/>
                    </form>
                </div>
                <div className="user-logo">
                    <img src={user} alt="user-logo" />
                </div>
        </div>
    );
};

export default Header;
