import Teacher, { preload } from "@/app/components/teacher"

export default async function Page({ params }) {
  const { id } = await params
  preload(id)
  return <Teacher id={id} />
}