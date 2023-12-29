async function getCourse(id) {
  const response = await fetch(`http://localhost:3000/api/courses/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export default async function Page({ params }) {
  const data = await getCourse(params.id)

  return (
    <>
      <ul>
        <li>nome: {data.name}</li>
        <li>descrição: {data.description}</li>
        <button
          onClick={console.log("inscrito!")}
          type="button"
          className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase py-3 px-6 rounded-lg 
        transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
        bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
        hover:shadow-lg hover:shadow-gray-500/20 
        focus:opacity-[0.85] focus:shadow-none 
        active:opacity-[0.85] active:shadow-none">
          inscrever-se
        </button>
      </ul>
    </>
  )
}