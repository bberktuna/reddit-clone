import { AppProps } from "next/app"
import Axios from "axios"
import { Fragment } from "react"
import { useRouter } from "next/router"

import Navbar from "../components/Navbar"
import "../styles/tailwind.css"
import { AuthProvider } from "./../context/auth"

Axios.defaults.baseURL = "http://localhost:5000/api"
Axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoute = pathname === "/register" || pathname === "/login"
  return (
    <AuthProvider>
      {!authRoute && <Navbar />}
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
