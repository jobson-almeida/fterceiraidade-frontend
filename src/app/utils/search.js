export default function Search({ onSearch, onChangeSearch, onPlaceHolder }) {
  return (
    <label className="relative block mb-4">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
        </svg>
      </span>
      <span className="sr-only">Search</span>
      <input type="text" name="search" value={onSearch} onChange={onChangeSearch} className="block bg-white min-w-full sm:min-w-[512px] border border-slate-300 rounded-md py-2 pl-9 pr-3
                shadow-sm placeholder:text-slate-400
                focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm"
        placeholder={onPlaceHolder}
      />
    </label>
  )
}

