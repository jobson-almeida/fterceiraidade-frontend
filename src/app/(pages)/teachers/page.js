import TeachersList from "../../components/teachers-list"

async function getTeachers() {
    const PORT = process.env.PORT || 3000;
    const response = await fetch(`http://localhost:${PORT}/api/teachers`)

    if (!response.ok) {
        return new Error("failed to load teachers")
    }
    return response.json()
}

export default async function TeachersPage() {
    const teachers = await getTeachers()
    return <TeachersList data={teachers} />
}