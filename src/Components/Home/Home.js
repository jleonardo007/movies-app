import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import FeaturesBar from "../FeaturesBar/FeaturesBar";
import MovieCard from "../MovieCard/MovieCard";
import API from "../../Services/api";

function Home() {
  const [currentMovies, setCurrent] = useState(null);

  useEffect(() => {
    (async () => {
      setCurrent(await API.fetchNowPlayingMovies());
    })();
  }, []);

  return (
    <div className="home">
      <FeaturesBar />
      <h1 className="home__title">Recent movies</h1>

      {currentMovies ? (
        <div className="home__movies">
          {currentMovies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="fetching-movie">Fetching movies</div>
      )}
    </div>
  );
}

export default Home;
