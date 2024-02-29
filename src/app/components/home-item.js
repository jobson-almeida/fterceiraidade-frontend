import Image from "next/image"

async function getCourse(id) {
  const response = await fetch(`${process.env.APP_BASE_URL}/api/courses/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export const preload = (id) => {
  void getCourse(id)
}

export default async function HomeItem({ id }) {
  const result = await getCourse(id)

  return (
    <>
      <ul>
        <li className="max-w-[1024px]">
          <Image
            src={result.image}
            alt={result.description}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </li>
        <li>nome: {result.name}</li>
        <li>descrição: {result.description}</li>
        <button
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