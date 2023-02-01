// import Image from 'next/image'
// import styles from './page.module.css'
import { Inter } from '@next/font/google'
import Header from './header'
import Pricing from './pricing'
import FooterFeatures from './feutures'
// import theme from './theme'
// import { ColorModeScript } from '@chakra-ui/react'
// import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <div>
      <Header/>
      <Pricing/>
      <FooterFeatures/>
      </div>
       </main>
     )
}
