import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-8 py-4">

        <div>
            <Link className="text-xl" href="/">coders book </Link>
        </div>
        <div className="flex gap-2">
            <button className="py-2 rounded-md px-5 border border-primary-200 ">Sign up</button>
            <button className="py-2 rounded-md px-5 bg-primary-500 text-white ">Sign in</button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar