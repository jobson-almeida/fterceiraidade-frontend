export default function ChartPerformanceLoading({ title }) {
  return (
    <>
      <div className="relative flex flex-col w-full p-6 bg-white shadow-md bg-clip-border rounded-t-xl text-xl font-bold">
        {title}
      </div>
      <div
        className="flex h-[350px] items-center justify-center gap-3 bg-white text-sm text-gray-500 shadow-md"
        role="status"
      >
        <svg
          className="h-5 w-5 animate-spin text-[#546e7a]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span>Carregando gráfico...</span>
      </div>
    </>
  );
}
