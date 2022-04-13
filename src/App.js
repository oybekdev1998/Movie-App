import React from 'react'
//import {Routes, Route} from 'react-router-dom'

import './App.scss';
import Header from "./components/Header/Header";
//import MovieDetail from "./components/MovieDetail/MovieDetail"
import Home from "./components/Home/Home";
//import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Home />    
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="/notfound" element={<PageNotFound />} />
          </Routes> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
