import { AppProps } from "next/app"
import Axios from "axios"
import { useRouter } from "next/router"
import { SWRConfig } from "swr"

import Navbar from "../components/Navbar"
import "../styles/tailwind.css"
import { AuthProvider } from "./../context/auth"

Axios.defaults.baseURL = "http://localhost:5000/api"
Axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoute = pathname === "/register" || pathname === "/login"
  return (
    <SWRConfig
      value={{
        fetcher: (url) => Axios.get(url).then((res) => res.data),
        dedupingInterval: 10000,
      }}
    >
      <AuthProvider>
        {!authRoute && <Navbar />}
        <Component {...pageProps} />
      </AuthProvider>
    </SWRConfig>
  )
}

export default App
