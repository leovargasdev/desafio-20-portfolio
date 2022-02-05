import Head from 'next/head'

import { Header } from 'components/Header'
import { Banner } from 'components/Banner'
import { AboutMe } from 'components/AboutMe'
import { Experiences } from 'components/Experiences'
import { Projects } from 'components/Projects'
import { Footer } from 'components/Footer'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>

      <Header />
      <Banner />
      <AboutMe />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
}
