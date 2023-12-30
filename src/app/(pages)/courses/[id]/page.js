import Image from "next/image"

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
  const course = await getCourse(params.id)

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1024px]">
      <div>{course.name}</div>
      <div>{course.description}</div>
      <div>
        <Image
          alt={course.name}
          src={course.image}
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
