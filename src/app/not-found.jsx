import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-[100vh] w-full text-[#0f0] flex justify-center content-center flex-wrap'>
      <p className='text-[150px] block w-full text-center font-bold'>
        Error 404
      </p>
      <Link href="/" className='apply-btn'>
        回首頁
      </Link>
    </div>
  )
}