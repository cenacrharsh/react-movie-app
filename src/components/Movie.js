import React from "react";
import { useParams } from "react-router-dom";

/*Config*/
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

/*Components*/
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb.js";
import MovieInfo from "./MovieInfo.js";

/*Hook*/
import { useMovieFetch } from "../hooks/useMovieFetch";

/*Image*/
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  /*we called it movieId ia App.js hence we destructure it by that name */
  /*We are getting the movieId from route(i.e url) using the useParams() hook */

  const { state: movie, loading, error } = useMovieFetch(movieId);

  // console.log("selected movie is", movie);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
