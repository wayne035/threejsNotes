import { useBookToggle } from "../store/bookToggle"
import Link from "next/link"

export default function Basic() {
  const toggle = useBookToggle(s=>s.toggle)
  const {setToggle} = useBookToggle()
  return (
    <>
      <section className={`${toggle ? 'opacity-1':'invisible'} fixed z-20 top-[25%] w-[350px] left-[20%] bg-[#ffffff] border-2 border-[#000] border-solid rounded-lg`}>
        <span className="absolute text-[30px] right-0 cursor-pointer m-2"
              onClick={()=>setToggle()}
        >
          ❌
        </span>
        <nav className="p-6 text-[20px] font-bold m-2">
          <h2 className='text-[24px] font-bold mb-3 cursor-default'>基本設置 : </h2>
          <Link href='/canvas' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            場景設置
          </Link>
          <Link href='/grid' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            網格幫手設置
          </Link>
          <Link href='/orbitControls' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            軌道控制器設置
          </Link>
          <Link href='/geometries' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            常用的幾何體
          </Link>
          <Link href='/camera' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            相機&幾何體位置設置
          </Link>
          <Link href='/lights' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            常用燈光設置
          </Link>
          <Link href='/useFrame' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            動畫設置
          </Link>
          <Link href='/event' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            常用的事件
          </Link>
          <Link href='/environment' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            背景環境設置
          </Link>
          <Link href='/useloader' className="block hover:text-[#865eff] border-b-2 border-solid m-2 border-[#000]">
            載入外部模型
          </Link>
        </nav>
      </section>
    </>

  )
}
