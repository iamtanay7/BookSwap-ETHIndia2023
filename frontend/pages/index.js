import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import HeroBanner from '@/components/HeroBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <h1 className="text-4xl font-bold text-center">ETH INDIA</h1>
    </div>
  )
}
