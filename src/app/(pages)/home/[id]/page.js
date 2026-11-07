import HomeItem, { preload } from "@/app/components/home-item"

export default async function Page({ params }) {
  const { id } = await params
  preload(id)
  return <HomeItem id={id} />
}
