import { Suspense } from 'react'
import MovieInfo from '../../../../component/movie-info'
import MovieVideos from '../../../../component/movie-videos'

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <>
      <h1>영화 상세 페이지</h1>
      <Suspense fallback={<h1>영화 정보 불러오는 중..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2>영화 동영상</h2>
      <Suspense fallback={<h1>영화 동영상 정보 불러오는 중..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  )
}
