function Movie({id,title,cast,year,genres}){

    /*
    []
    * */

    function getCast(){

        if(cast && cast.length){

            let map = cast.map(function (member){
                return <li key={member} className="member">{member}</li>
            });
            return <ul>{map}</ul>
        }
    }
    function getGenres(){
        if(genres && genres.length){
            let map = genres.map(function (genre){
                return <li key={genre} className="genre">{genre}</li>
            });
            return <ul>{map}</ul>
        }
    }
    return <div key={id} className="Movie">
        <div className="title" >Name:{title}</div>
        <div className="cast" ><div>
            {cast.length ? <span>Cast:</span>:""}

            {getCast()}</div>
        </div>
        <div className="ganres">

            {genres.length ? <span>Genres:</span>:""}
            {getGenres()}
        </div>
        <div className="year" >Year:{year}</div>
    </div>


}

export default Movie
