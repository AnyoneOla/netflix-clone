import './MovieCard.css'

export default function MovieCard({image='https://image.tmdb.org/t/p/original/pDKFL1zcHzEpmz4MJA5JJnRbJeD.jpg', height=140}){

    return (
        <div className="movie-card" style={{height:height}} >
            <img style={{height:height}} src={image} />
        </div>
    )
}