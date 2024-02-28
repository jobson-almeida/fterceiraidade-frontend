import Image from "next/image"

async function getCourse(id) {
  const response = await fetch(`${process.env.APP_PUBLIC_URL}/api/courses/${id}`, {
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

export default async function Course({ id }) {
  const result = await getCourse(id)

  if (!result || result === null || result === undefined || result.description === undefined) {
    throw new Error('Falhou')
  }

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1024px]">
      <div>{result.name}</div>
      <div>{result.description}</div>
      <div>
        <Image
          alt={result.name}
          src={result.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}
          priority
        />
      </div>
    </div>
  )
}