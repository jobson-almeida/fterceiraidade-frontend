import StudentsList from "../../components/students-list"

async function getStudents() {
    const response = await fetch("http://localhost:3000/api/students")
    if (!response.ok) {
        return new Error("failed to load students")
    }
    return response.json()
}

export default async function StudentsPage() {
    const students = await getStudents()
    return <StudentsList data={students} />
}