import Skeleton from './skeleton';

function Paper() {
  return (
    <div className="relative flex flex-col max-h-screen w-full max-w-[440px]  ">
      <div className="relative shadow-md bg-white flex flex-col bg-clip-border rounded-xl">

        <div className="my-10 mx-2">
          <div className="flex flex-row justify-center items-center mb-5">
            <Skeleton style="w-56 h-[20px]" />
          </div>
          <div className="flex flex-row justify-center items-center mb-[7.5px]">
            <Skeleton style="w-72 h-[14px]" />
          </div>
          <div className="flex flex-row justify-center items-center my-[8px]">
            <Skeleton style="w-64 h-[14px]" />
          </div>
        </div>

        <div className="flex flex-grow" />
        <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-200" />

        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center p-2">
            <div><Skeleton style="w-36 h-6" /></div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center p-2">
              <div><Skeleton style="w-12 h-6" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SkeletonPaper({ rowsPerPage }) {
  return (
    <div className="flex flex-col items-center pt-14">
      <div className="grid lgg:grid-cols-test3 lg:grid-cols-test2 md:grid-cols-test2 sm:grid-cols-test1 mt-3 gap-4">
        {[...Array(rowsPerPage)].map((_, i) => (
          <Paper key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-2" >
        <div className=""><Skeleton style=" w-32 h-10" /></div>
      </div>
    </div >
  )
}