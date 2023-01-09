import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import { state } from '../interfaces/tienda';

export default function Home() {

  const lastWeekId: number = useSelector((state: state) => state.data.weeks[state.data.weeks.length - 1].id)

  return (
    <div className={styles.container}>
      <Head>
        <title>Budget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Budget!</a>
        </h1>
        <nav>
          <ul>
            <li><Link href={`/dashboard/${lastWeekId}`} >Dashboard</Link></li>
            <li><Link href={`/add-store`} >Nueva Tienda</Link></li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
