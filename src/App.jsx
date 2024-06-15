import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Poster from './Poster'
import MoviesRaw from '../MoviesRaw'

function App() {

  const [posterImg, serPosterImg] = useState('');
  const [posterTitle, setPosterTitle] = useState('');
  const [posterDesc, setPosterDesc] = useState('');
  const [popularData, setPopularData] = useState({})
  const [horrorData, setHorrorData] = useState({})
  const [actionData, setActionData] = useState({})
  const [onlyNetflixData, setOnlyNetflixData] = useState({});
  const [romanceData, setRomanceData] = useState({})
  const Image_URL = 'https://image.tmdb.org/t/p/original'
  const number = Math.floor(Math.random() * 20);


  //Setting Up Poster
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
      .then(json => {serPosterImg(json.results[number].backdrop_path.toString());
                     setPosterTitle(json.results[number].title.toString());
                     setPosterDesc(json.results[number].overview.toString());
                    })
      .catch(err => console.error('error:' + err));
  }, [])

  //Setting Up Popular
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
                   setPopularData(json.results);
                  })
    .catch(err => console.error('error:' + err));
  }, [])

  //Setting Up Horror
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setHorrorData(json.results);
                  })
    .catch(err => console.error('error:' + err));
  }, [])

  //Setting Up Action
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setActionData(json.results);
                  })
    .catch(err => console.error('error:' + err));
  }, [])


  //Setting Up Onlu On Netflix
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setOnlyNetflixData(json.results);
                  })
    .catch(err => console.error('error:' + err));
  }, [])

  //Setting Up Love
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setRomanceData(json.results);
                  })
    .catch(err => console.error('error:' + err));
  }, [])



  return (
    <>
      <Navbar />
      <Poster img={Image_URL+posterImg} title={posterTitle} desc={posterDesc} />
      <div style={{position:'absolute', top: '40vw', width:'100vw'}}>
        <div style={{position:'relative'}}>
          <MoviesRaw data={popularData} />
          <MoviesRaw data={horrorData} name='Horror' marginTop='5vw' image='https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg' />
          <MoviesRaw data={onlyNetflixData} name='Only On Netflix' marginTop='5vw' image='https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg' height='420px'/>
          {/* <MoviesRaw data={adventureData} name='Adventure' marginTop='5vw' image='https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg' height='420px'/> */}
          <MoviesRaw data={romanceData} name='Romance' marginTop='380px' image='https://image.tmdb.org/t/p/original/v5XyXZe8FADw8iHupB4L7QOAwH9.jpg' />
          <MoviesRaw data={actionData} name='Action' marginTop='5vw' image='https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg' />
        </div>
        {/* <TestDemo /> */}
      </div>
      
    </>
  )
}

export default App
