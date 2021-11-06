import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container/Container'
import Header from '../components/Header'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify redesing example application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container />
    </div>
  )
}

export default Home
