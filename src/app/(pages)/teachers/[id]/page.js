import Teacher, { preload } from "@/app/components/teacher"

export default async function Page({ params }) {
  preload(params.id)
  return <Teacher id={params.id} />
}