import Student, { preload } from "@/app/components/student"

export default async function Page({ params }) {
  const { id } = await params
  preload(id)
  return <Student id={id} />
}