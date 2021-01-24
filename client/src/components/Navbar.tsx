import RedditLogo from "../../public/images/reddit.svg"
import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/">
          <a>
            <RedditLogo className="w-8 h-8 mr-2" />
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">reddit</Link>
        </span>
      </div>
      {/* Search bar */}
      <div className="flex items-center mx-auto bg-gray-100 border border-gray-200 rounded hover:bg-white hover:">
        <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
        <input
          placeholder="Search"
          type="text"
          className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
        />
      </div>
      {/* Auth buttons */}
      <div className="flex">
        <Link href="/login">
          <a className="w-32 px-5 py-1 mr-4 leading-6 hollow blue button">
            log in
          </a>
        </Link>
        <Link href="/register">
          <a className="w-32 py-1 leading-6 blue button">sign up</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar