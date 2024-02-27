import TeachersList from "../../components/teachers-list"

async function getTeachers() {
<<<<<<< HEAD
    const response = await fetch("http://localhost:3000/api/teachers")
=======
    const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/teachers`)
>>>>>>> cf3f9e87f17fc78a27318538d0737bead45e5df8
    if (!response.ok) {
        return new Error("failed to load teachers")
    }
    return response.json()
}

export default async function TeachersPage() {
    const teachers = await getTeachers()
    return <TeachersList data={teachers} />
}