"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const AboutStudent = () => {
    const router = useRouter()

    const handleClick = (name) => {
        router.push(name)
    }
    return (

        <div>
            <h1>About student page</h1>
            <Link href={"/about"}>Back To About Page</Link> <br /><br />
            <button onClick={() => handleClick("/about")}>Back to About Page</button> <br /><br />
            <Link href={"/about/aboutstudent/studentone"}>Go To Student One Page</Link><br /><br />
            <button onClick={() => handleClick("/about/aboutstudent/studentone")}>Go to Student One page</button>

        </div>
    )
}
export default AboutStudent