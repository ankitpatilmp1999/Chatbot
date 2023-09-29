import { Inter } from 'next/font/google'
import MainRender from '@/components/ChatBot/Render/MainRender'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainRender />
    </>
  )
}