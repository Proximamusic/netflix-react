import instance from "./Axios";
import React, { useEffect, useState } from "react";
import "./homescreen.css";
function Carousel(props) {
    const [movieList, setMovieList] = useState([])
  useEffect(() => {
    async function fetchMovie() {
      const response = await instance.get(props.request);
      setMovieList(response.data.results)
      console.log(movieList);
    }
    fetchMovie();
  }, []);
  return (
    <div className="carousel">
      <h3 className="category">{props.title}</h3>
      <div className="carousel-images">
      {movieList.map(
        (item) =>
              <img className={props.class}src={"https://image.tmdb.org/t/p/original"+ item.poster_path} alt="" />
         
      )}
      </div>
    </div>
  );
}

export default Carousel;
