import { Metadata } from 'next'
import Link from 'next/link'

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
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  )
}
