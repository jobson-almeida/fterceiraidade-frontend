import Classroom, { preload } from "@/app/components/classroom"

export default async function Page({ params }) {
  const { id } = await params
  preload(id)
  return <Classroom id={id} />
}