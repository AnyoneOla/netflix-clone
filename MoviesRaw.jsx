import './src/MoviesRaw.css'
import MovieCard from './src/MovieCard'

export default function MoviesRaw({data, name='Popular On Netflix', marginTop=0, height=140, image}){
    let arr = []
    const Image_URL = 'https://image.tmdb.org/t/p/original'
    if(height!='420px'){
        for(let element in data){
            arr.push(<MovieCard height={height} image={Image_URL + data[element].backdrop_path} key={element}/>)
        }
    }
    else{
        for(let element in data){
            arr.push(<MovieCard height={height} image={Image_URL + data[element].poster_path} key={element}/>)
        }
    }
    // for(element in data){
    //     console.log('1')
    //     // 
    // }
    return (
        <div className='movies-raw-main' style={{marginTop:marginTop}}>
            <div className='movies-raw-title'>{name}</div>
            <div className='movies-raw-cards' style={{paddingTop:'10px'}}>
                {arr}
            </div>
        </div>
    )
}