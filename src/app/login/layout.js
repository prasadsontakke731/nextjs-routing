"use client"
import Link from "next/link"
const Layout = ({ children }) => {
    return (
        <div>
            <h1 style={{ color: "white", backgroundColor: "black", textAlign: "center", padding: "20px 0px" }}>Common Layout for Login Page</h1>
            <ul>
                <li>
                    <Link href={"/login"}>Login main</Link>
                </li>
                <li>
                    <Link href={"/login/studentlogin"}>Login main</Link>
                </li>
                <li>
                    <Link href={"/login/teacherlogin"}>Login main</Link>
                </li>
            </ul>
            {
                children
            }
        </div>
    )
}
export default Layout