import { NavBar } from '@/components/nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>

    <NavBar />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 w-full`}
    >

      <Component {...pageProps} />
    </main>
  </div>
}
