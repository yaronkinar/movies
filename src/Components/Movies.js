import axios from "axios";
import {useEffect, useState} from "react";
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
    useEffect(function () {
        if (sortAscending) {
            sortMovies()
        } else {
            sortBackwordMovies()
        }
    }, [sortAscending])

    function sortMovies() {
        const sortedList = [...movies].sort((a, b) => {
            return a.title.localeCompare(b.title)
        });


        setMovies(sortedList)

    }

    function handleToggle() {
        setSortAscending(!sortAscending)
    }

    function sortBackwordMovies() {
        const sortedList = [...movies].sort((a, b) => {
            return b.title.localeCompare(a.title);
        })

        setMovies(sortedList)

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
