import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import { API_URL } from "./context";
// import './App.css';
import './style.css';

const SingleMovie = () => {

    const { id } = useParams();
    console.log(id);

    const[isLoading,setIsLoading]=useState(true);
    const[movie,setMovie]=useState(null);
    
   
    const getMovies=async(url)=>{
      setIsLoading(true);
     try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data.Response==="True"){
                setIsLoading(false);
                setMovie(data);
            }
         }
    catch (error) {
        console.log(error)
    }
};

    useEffect(()=>{
      let timerOut=setTimeout(()=>{
        getMovies(`${API_URL}&i=${id}`);
      },1000)
          return ()=>clearTimeout(timerOut);
    },[id]);

    if(isLoading){
      return(
        <div className="movie-section">
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        </div>
    );
   }

  return (
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title"><span>Title : </span>{movie.Title}</p>
            <p className="card-text"><span>Release Date : </span>{movie.Released}</p>
            <p className="card-text"><span>Genre : </span>{movie.Genre}</p>
            <p className="card-text"><span>Rating : </span>{movie.imdbRating}</p>
            <p className="card-text"><span>Country : </span>{movie.Country}</p>
            
          </div>
        </div>
      </section>
  
  )
}

export default SingleMovie;
