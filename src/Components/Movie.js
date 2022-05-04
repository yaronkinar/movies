function Movie({id,title,cast,year,genres}){

    /*
    []
    * */

    function getCast(){
        if(cast && cast.length){

            return cast.map(function (member){
                return <div key={member} className="member">{member}</div>
            })
        }
    }
    function getGenres(){
        if(genres && genres.length){
            return genres.map(function (genre){
                return <div key={genre} className="genre">{genre}</div>
            })
        }
    }
    return <div key={id} className="Movie">
        <div className="title" >Name:{title}</div>
        <div className="cast" ><div>
            {cast.length ? <span>Cast:</span>:""}

            {getCast()}</div>
        </div>
        <div className="ganres">
            {genres.length >1? <span>Genres:</span>:<span>Genre:</span>}
            {getGenres()}
        </div>
        <div className="year" >Year:{year}</div>
    </div>


}

export default Movie
