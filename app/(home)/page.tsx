import { Metadata } from 'next'
import Link from 'next/link'
import Movie from '../../component/movie'
import sytles from '../../styles/home.module.css'

export const metadata = {
  title: 'Home',
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log("I'm fetching!")
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
    <main>
      <ul className={sytles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </ul>
    </main>
  )
}
