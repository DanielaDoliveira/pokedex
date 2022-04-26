import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HomeContent from '../Components/HomeContent'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WEBDEX - YOUR WEB POKÉDEX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet"/>

      </Head>
      <nav>
        <Header/>
      </nav>
      <main className = "p-10">
       <HomeContent/>
      </main>
    
    </>
  )
}

export default Home
