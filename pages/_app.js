import { NavBar } from '@/components/nav'
import '@/styles/globals.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
  }, [])
  
  return <div>

    <NavBar />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 w-full bg-blue-300`}
    >

      <Component {...pageProps} />
    </main>
  </div>
}
