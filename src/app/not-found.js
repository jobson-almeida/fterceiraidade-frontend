import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center bg-[#f4f6f8] text-[#546e7a]">
      <div>
        <h1 className="border-r-[1px] border-solid border-[rgba(0,0,0,.3)] inline-block my-0 mr-5 ml-0 py-0 pr-[23px] pl-0 text-[24px] font-medium align-top leading-[49px]">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-[14px] font-normal leading-[49px] m-0">
            Essa página não foi encontrada.
          </h2>
          <h2 className="text-[14px] font-normal leading-[49px] m-0 text-[rgba(0,0,0,.4)]">
            <Link href="/" >Home</Link>
          </h2>
        </div>
      </div>
    </div>
  )
}