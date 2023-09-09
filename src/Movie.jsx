import React from 'react';
import {NavLink} from "react-router-dom";
import {useGlobalContext} from "./context";
// import './App.css';
import './style.css';

const Movie = () => {
    const {movie,isLoading}=useGlobalContext();

    if(isLoading){
      return(
        <div className="movie-section">
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        </div>
    )
   }
   
  return (
    <section className="movie-page">
    <div className="grid grid-4-col">
      {
        movie.map((elem)=>{
         
        const {imdbID,Title,Poster}=elem;
        const moviename=Title.substring(0,15);
           
        return (     
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                <div className="card-info">
                <h1>{moviename.length>=15 ? `${moviename}...` : moviename}</h1>
                    <img src={Poster} alt={imdbID}/>
                    </div>
               </div>
               </NavLink>
             
        )
        })
      }
      </div>
    </section>
  )
}

export default Movie
