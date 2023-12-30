import Skeleton from "./skeleton";

export default function SkeletonAssessments({ rowsPerPage, totalHead }) {
  return (
    <>
      <div className="min-w-full sm:min-w-[512px] pb-4">
        <Skeleton style="w-[512px] h-[38px]" />
      </div>
      <div className="not-prose relative bg-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-auto mt-8">
            <div className="overflow-x-auto">
              <div className="table border-collapse table-auto w-full">
                <div className="table-header-group">
                  <div className="table-row">
                    {[...Array(totalHead)].map((_, i) =>
                      i < totalHead - 1 ? (
                        <div key={i} className="table-cell border-b p-4 pl-8 pt-0 pb-[10px]">
                          <span className="inline-flex justify-start flex-row items-center">
                            <Skeleton style="w-24 h-[17px]" />
                            <div className="h-4" />
                          </span>
                        </div>) : (<div key={i} className="table-cell border-b" />
                      ))}
                  </div>
                </div>
                <div className="table-row-group bg-white">
                  {[...Array(rowsPerPage)].map((_, i) => (
                    <div key={i} className="table-row">
                      <div className="table-cell border-b border-slate-100 pt-7 pb-[21px] pl-8"><Skeleton style="w-[672px] h-3" /></div>
                      <div className="table-cell border-b border-slate-100 pt-7 pb-[21px] pl-8"><Skeleton style="w-24 h-3" /></div>
                      <div className="table-cell border-b border-slate-100 pt-7 pb-[21px] pl-8"><Skeleton style="w-24 h-3" /></div>
                      <div className="table-cell border-b border-slate-100 pt-7 pb-[21px] pl-8"><Skeleton style="w-24 h-3" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-end pr-4 pb-2 mt-2" >
          <Skeleton style="w-32 h-10" />
        </div>
      </div >
    </>
  )
}
