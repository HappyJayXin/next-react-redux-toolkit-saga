import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Counter from '../features/Counter';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
      </header>
    </div>
  )
}

export default IndexPage
