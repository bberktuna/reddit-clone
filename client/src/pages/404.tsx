import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl text-gray-800">Page Not Found</h1>
      <div className="pt-20">
        <Link href="/">
          <a className="px-4 py-2 text-xl border border-gray-500 rounded button hover:bg-gray-300">
            Home
          </a>
        </Link>
      </div>
    </div>
  )
}
