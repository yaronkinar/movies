import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import Movie from "./Movie";

// https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
function Movies() {

    const [movies, setMovies] = useState([])
    const [sortAscending, setSortAscending] = useState(false)
    useEffect(function () {
        let url = " https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
        axios.get(url).then(r => {
            let data = r.data
            setMovies(data)

        })
    }, [])
    const sortMoviesCb = useCallback(() => sortMovies(movies), [movies]);
    const sortBackwardMoviesCB = useCallback(() => sortBackwardMovies(movies), [movies]);

    /* useEffect(function () {
         function sortMovies() {
             const sortedList = [...movies].sort((a, b) => {
                 return a.title.localeCompare(b.title)
             });
             setMovies(sortedList)
         }
         function sortBackwardMovies() {
             const sortedList = [...movies].sort((a, b) => {
                 return b.title.localeCompare(a.title);
             })

             setMovies(sortedList)

         }

         if (sortAscending) {
             sortMovies()
         } else {
             sortBackwardMovies()
         }
     }, [sortAscending])*/
    function sortBackwardMovies(movies) {
        const sortedList = [...movies].sort((a, b) => {
            return b.title.localeCompare(a.title);
        })

        setMovies(sortedList)

    }
    function sortMovies(movies) {
        const sortedList = [...movies].sort((a, b) => {
            return a.title.localeCompare(b.title)
        });
        setMovies(sortedList)
    }


    function handleToggle(sort) {
        setSortAscending(!sort)
        console.log(sortAscending)
        if(sortAscending){
            sortMoviesCb()

        }else {
            sortBackwardMoviesCB()

        }
    }



    return (
        <div className="container">
            <h1>Movies</h1>
            <div className="buttons">
                <button className="sort dec" onClick={()=>{handleToggle(sortAscending)}}>
                    Sort By Title
                </button>

            </div>


            <div className="movieList">
                {movies.slice(0, 9)?.map(function (movie, id) {
                    return (<Movie key={movie.title} id={id}{...movie}/>)
                })}
            </div>

        </div>
    );
}

export default Movies;
