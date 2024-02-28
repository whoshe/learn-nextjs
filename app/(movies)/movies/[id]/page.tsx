import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../component/movie-info'
import MovieVideos from '../../../../component/movie-videos'

interface IParams {
  params: { id: string }
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}
export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <h1>영화 상세 페이지</h1>
      <Suspense fallback={<h1>영화 정보 불러오는 중..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2>영화 동영상</h2>
      <Suspense fallback={<h1>영화 동영상 정보 불러오는 중..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
