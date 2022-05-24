/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Intro from '../components/intro'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Birva - Create a Portfolio</title>
      </Head>

      <Intro />
    </Container>
  )
}

export default Home
