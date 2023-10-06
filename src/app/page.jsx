'use client'
import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <nav className="p-5 text-[#fff]">
        <h2 className='text-[24px] font-bold mb-3'>基本設置 : </h2>
        <Link href='/canvas' className='apply-link'>
          場景設置
        </Link>
        <Link href='/grid' className='apply-link'>
          網格幫手設置
        </Link>
        <Link href='/orbitControls' className='apply-link'>
          軌道控制器設置
        </Link>
        <Link href='/camera' className='apply-link'>
          相機&物體設置
        </Link>
        <Link href='/useFrame' className='apply-link'>
          動畫設置
        </Link>
        <Link href='/event' className='apply-link'>
          物體事件設置
        </Link>
        <Link href='/environment' className='apply-link'>
          背景環境設置
        </Link>
      </nav>
    </>
  )
}