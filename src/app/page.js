"use client"
import { useRouter } from "next/navigation";
import Link from "next/link"


export default function Home() {
  const router = useRouter()


  return (
    <main >

      <Link href={"/login"}>Go to Login Page</Link> <br /><br /><br />
      <Link href={"/about"}>Go to About Page</Link><br /><br /><br />
      <button onClick={() => router.push("/login")}>go to login page</button><br /><br /><br />
      <button onClick={() => router.push("/about")}>go to about page</button><br /><br /><br />

    </main>
  );
}

const User = ({ name, count, data }) => {

  return (
    <>
      <h1>Hello User : {data}</h1>
      <h1>My name is : {name}</h1>
      <h1>My name is : {count}</h1>


    </>
  )
}