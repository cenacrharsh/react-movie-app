import { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* fetchMovie() function won't get recreated unless movieId changes, without useCallback() hook it will get recreated in each rerender and useEffect() thinks it's a new func everytime hence creating an infinite loop */

  // const fetchMovie = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     setError(false);

  //     const movie = await API.fetchMovie(movieId);
  //     const credits = await API.fetchCredits(movieId);

  //     /*Get Directors Only*/
  //     const directors = credits.crew.filter(
  //       (member) => member.job === "Director"
  //     );

  //     setState({
  //       ...movie,
  //       actors: credits.cast,
  //       directors,
  //     });

  //     setLoading(false);
  //   } catch (error) {
  //     setError(true);
  //   }
  // }, [movieId]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        /*Get Directors Only*/
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { state, loading, error };
};
