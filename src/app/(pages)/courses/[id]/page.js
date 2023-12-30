import Course, { preload } from "@/app/components/course"

export default async function Page({ params }) {
  preload(params.id)
  return <Course id={params.id} />
}
