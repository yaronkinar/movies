import axios from "axios";
import {useEffect, useState} from "react";
import Movie from "./Movie";
// https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
function Movies() {

    const [movies,setMovies] = useState([])
    const [toggleButton,setToggleButton] = useState(false)
    useEffect(function () {
        let url = " https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
        axios.get(url).then(r  =>{
            let data = r.data
            setMovies(data)

        })
    },[])
    function sortMovies(){

        const sortedList = [...movies].sort((a, b) =>{
            return a.title.localeCompare(b.title)
        } );


        setMovies(sortedList)
        setToggleButton(true)

    }
    function sortBackwordMovies(){
        const sortedList = [...movies].sort((a, b) => {
            return b.title.localeCompare(a.title);
        })

        setMovies(sortedList)
        setToggleButton(false)

    }
    return (
        <div>
            <h1>Movies</h1>
             <button className="sort" onClick={sortMovies}>
                Sort dec
            </button>
            <button className="sort" onClick={sortBackwordMovies}>
            Sort as
        </button>


            <div className="movieList">
                {movies.slice(0,9)?.map(function (movie,id) {
                    return  (<Movie key={movie.title}  id={id}{...movie}/>)
                })}
            </div>

        </div>
    );
}

export default Movies;
