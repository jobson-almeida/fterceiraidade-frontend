import Student, { preload } from "@/app/components/student"

export default async function Page({ params }) {
  preload(params.id)
  return <Student id={params.id} />
}