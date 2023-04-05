import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Bitter } from 'next/font/google'

const roboto = Bitter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
  
}
