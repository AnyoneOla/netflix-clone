import { useState, useEffect } from "react";
export default function TestDemo(){

    const [data, setdata] = useState('');
    const Image_URL = 'https://image.tmdb.org/t/p/original'

    useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
        }
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => {console.log(json); setdata(json.results[1].backdrop_path.toString())})
        .catch(err => console.error('error:' + err));
    }, [])

    

    return (
    <div style={{color:'white'}}>
    <h1>
        Hello
    </h1>
    <img src={Image_URL + data} />
    {data}
    </div>
    )
}