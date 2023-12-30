import Classroom, { preload } from "@/app/components/classroom"

export default async function Page({ params }) {
  preload(params.id)
  return <Classroom id={params.id} />
}