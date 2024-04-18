"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const StudentOne = () => {
    const router = useRouter()
    return (
        <>
            <h1>Student One Page</h1>
            <Link href={"/about/aboutstudent"}>Back To About Student Page</Link><br /><br />
            <button onClick={() => router.push("/about/aboutstudent")}>Back to About Student Page</button>

        </>
    )
}
export default StudentOne