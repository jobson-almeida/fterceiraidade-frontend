import HomeItem, { preload } from "@/app/components/home-item"

export default async function Page({ params }) {
  preload(params.id)
  return <HomeItem id={params.id} />
}
