import RedditLogo from "../../public/images/reddit.svg"
import Link from "next/link"
import { useAuthDispatch, useAuthState } from "../context/auth"
import { Fragment, useEffect, useState } from "react"
import Axios from "axios"
import Image from "next/image"
import { Sub } from "../../types"
import { useRouter } from "next/router"

const Navbar: React.FC = () => {
  const [name, setName] = useState("")
  const [subs, setSubs] = useState<Sub[]>([])
  const [timer, setTimer] = useState(null)

  const { authenticated, loading } = useAuthState()

  const dispatch = useAuthDispatch()
  const router = useRouter()

  const logout = () => {
    Axios.get("/auth/logout")
      .then(() => {
        dispatch("LOGOUT")
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (name.trim() === "") {
      setSubs([])
      return
    }
    searchSubs()
  }, [name])

  const searchSubs = async () => {
    clearTimeout()
    setTimer(
      setTimeout(async () => {
        try {
          const { data } = await Axios.get(`/subs/search/${name}`)
          setSubs(data)
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      }, 500)
    )
  }

  const goToSub = (subName: string) => {
    router.push(`/r/${subName}`)
    setName("")
  }

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
      <div className="relative flex items-center mx-auto bg-gray-100 border border-gray-200 rounded hover:bg-white hover:">
        <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
        <input
          placeholder="Search"
          type="text"
          className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div
          className="absolute left-0 right-0 bg-white"
          style={{ top: "100%" }}
        >
          {subs?.map((sub) => (
            <div
              className="flex items-center px-4 py-3 mr-4 cursor-pointer hover:bg-gray-300"
              onClick={() => goToSub(sub.name)}
            >
              <div className="overflow-hidden ">
                <Image
                  src={sub.imageUrl}
                  alt="Sub"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
                <div className="ml-4 text-sm">
                  <p className="font-medium"> {sub.name} </p>
                  <p className="text-gray-600"> {sub.title} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Auth buttons */}

      <div className="flex">
        {!loading &&
          (authenticated ? (
            //! Show logout
            <button
              className="w-32 px-5 py-1 mr-4 leading-6 hollow blue button"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Fragment>
              <Link href="/login">
                <a className="w-32 px-5 py-1 mr-4 leading-6 hollow blue button">
                  log in
                </a>
              </Link>
              <Link href="/register">
                <a className="w-32 py-1 leading-6 blue button">sign up</a>
              </Link>
            </Fragment>
          ))}
      </div>
    </div>
  )
}

export default Navbar
