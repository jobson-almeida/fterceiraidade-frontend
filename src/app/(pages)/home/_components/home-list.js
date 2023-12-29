import HomeCard from "./home-card";

export default async function HomeList({ data }) {
  return (
    <div className="flex flex-col items-center pt-14">
      <div className="grid lgg:grid-cols-test3 lg:grid-cols-test2 md:grid-cols-test2 sm:grid-cols-test1 mt-3 gap-4">
        {data.map((course, i) => (
          <HomeCard key={i} data={course} />
        ))}
      </div>
    </div>
  )
}