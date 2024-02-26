import TeachersList from "../../components/teachers-list"

async function getTeachers() {
    const response = await fetch('http://localhost:3000/api/teachers')
    return response.json()
}

export default async function TeachersPage() {
    const teachers = await getTeachers()
    return <TeachersList data={teachers} />
}