import StudentsList from "../../components/students-list"

async function getStudents() {
    const response = await fetch('http://localhost:3000/api/students', {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
        cache: "no-cache"
        // next: { tags: ["students"] }
    })
    //    await wait();
    return response.json()
}

// export async function wait() {
//     return await new Promise((resolve) => setTimeout(resolve, 1000));
// }

export default async function StudentsPage() {
    const students = await getStudents()
    return <StudentsList data={students} />
}