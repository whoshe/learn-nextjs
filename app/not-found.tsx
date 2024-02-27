import { Metadata } from 'next'
import Navigation from '../component/navigation'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <>
      <h1>못 찾음</h1>
    </>
  )
}
