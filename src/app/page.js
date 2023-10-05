import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <nav className="p-5 text-[#fff]">
        <Link href='/camera' className='apply-btn'>
          相機&物體設置
        </Link>
        <Link href='/useFrame' className='apply-btn'>
          useFrame(動畫設置)
        </Link>
      </nav>
    </>
  )
}