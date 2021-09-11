import axios from "./Axios";
import requests from "./Request";
import React, { useEffect, useState } from 'react'
import './homescreen.css';
import instance from "./Axios";
import Carousel from "./Carousel";
import HomeNav from "./HomeNav";


function HomeScreen() {

const [movie, setMovie] = useState([])

useEffect(()=>{
    async function getdata(){
        const request = await instance.get(requests.thrillerMovies);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        // console.log(request.data.results)
        // console.log(movie)
    }
    getdata();
    return requests
}, [])
    const truncate=(string, num)=>{
        if (string?.length > num){
            return string.slice(0,num)+ "...";
        }else{
            return string
        }
    }
    const str = truncate(movie.overview, 150);
    return (
        <div className="homescreen">
            <div className="homescreen-movie-feature-container" style= {{backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
            <img className="homenav-logo" src="/images/netflix-logo.png" alt="" />
               
               <div className="homescreen-movie-feature">
                
               <h1 className="homescreen-movie-name" >
                {movie?.original_title || movie?.title} 
                </h1> 
                <button className='homescreen-btn btn-play'><i class="fas fa-play"> </i>Play</button>
                <button className='homescreen-btn btn-info'>More Info</button>
                <p className="homescreen-movie-info">
                {str}
                </p> 
                
               </div>

            </div>
            <Carousel title="Now Showing"
             request = {requests.now_playing}
             class="movie"
            />
            <Carousel title="Action Movies"
             request = {requests.actionMovies}
             class="movie"
            />
            <Carousel title="Horror"
             request = {requests.horrorMovies}
             class="movie"
            />
            <Carousel title="Comedy"
             request = {requests.comedyMovies}
             class="movie"
            />
            
        </div>
    )
}

export default HomeScreen
