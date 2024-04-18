"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const About = () => {
    const router = useRouter()
    return (
        <div>
            <h1>About Page</h1>
            <Link href={"/"}>Go to Home page</Link><br /><br />
            <button onClick={() => router.back("/")}>go to home page</button><br /><br /><br />

            <Link href={"/about/aboutstudent"}>Go to About Student Page</Link> <br /><br /><br />
            <button onClick={() => router.push("/about/aboutstudent")}>Go to About Student Page</button><br /><br /><br />

        </div>
    )
}
export default About