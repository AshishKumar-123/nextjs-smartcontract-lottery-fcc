import Head from 'next/head'
import styles from '../styles/Home.module.css'

//components
import Header from "../components/Header"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our smartcontract lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
    </div>
  )
}
