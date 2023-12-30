import Skeleton from './skeleton';

function Paper() {
  return (
    <div className="w-full max-w-[1024px] py-2">
      <div className="shadow-md bg-white bg-clip-border rounded-xl p-2">
        <div className="font-normal text-base pb-2">
          <div><Skeleton style="w-[768px] h-6" /></div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center justify-center h-full gap-1">
            <div>
              <Skeleton style="w-[640px] h-5 p-1" />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row items-center p-2">
              <div>
                <Skeleton style="w-8 h-6 px-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SkeletonQuestions({ rowsPerPage }) {
  return (
    <div>
      {[...Array(rowsPerPage)].map((_, i) => (
        <Paper key={i} />
      ))}
    </div>
  )
}
