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

    const sortBackWords = useCallback(
        () => {
            const sortedList = [...movies].sort((a, b) => {
                return b.title.localeCompare(a.title);
            })

            setMovies(sortedList)
        },
        [movies],
    );

    let sortMoviesCallback = useCallback(
        () => {
            const sortedList = [...movies].sort((a, b) => {
                return a.title.localeCompare(b.title)
            });
            setMovies(sortedList)
        },
        [movies],
    );

    useEffect(function () {



        if (sortAscending) {
            sortMoviesCallback()
        } else {
            sortBackWords()
        }
    }, [sortAscending,sortMoviesCallback,sortBackWords])



    function handleToggle() {
        setSortAscending(!sortAscending)
    }



    return (
        <div className="container">
            <h1>Movies</h1>
            <div className="buttons">
                <button className="sort dec" onClick={handleToggle}>
                    Sort By Title
                </button>
                {/*<button className="sort dec" onClick={sortBackwordMovies}>
                    Sort Ascending
                </button>*/}
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
