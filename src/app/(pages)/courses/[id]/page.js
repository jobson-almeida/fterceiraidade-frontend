import Course, { preload } from "@/app/components/course"

export default async function Page({ params }) {
  const { id } = await params
  preload(id)
  return <Course id={id} />
}
