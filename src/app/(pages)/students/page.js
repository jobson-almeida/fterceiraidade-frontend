import StudentsList from "../../components/students-list"

async function getStudents() {
    const response = await fetch('http://localhost:3000/api/students')
    return response.json()
}

export default async function StudentsPage() {
    const students = await getStudents()
    return <StudentsList data={students} />
}