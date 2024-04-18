"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const Login = () => {
    const router = useRouter()
    return <>
        <div>
            <h1>Login page</h1>
            <Link href={"/"}>Go to Home page</Link> <br /><br />
            <button onClick={() => router.back("/")}>go to home page</button><br /><br /><br />

        </div>
    </>
}
export default Login