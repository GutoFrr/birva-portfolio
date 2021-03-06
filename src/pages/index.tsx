/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Intro from '../components/intro'
import About from '../components/about'
import Header from '../components/header'
import Works from '../components/works'
import Testimonials from '../components/testimonials'
import Services from '../components/services'
import Companies from '../components/companies'
import Team from '../components/team'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Map from '../components/map'
import MobileHeader from '../components/mobile-header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Birva - Create a Portfolio</title>
      </Head>

      <Header />
      <MobileHeader />
      <Intro />
      <About />
      <Works />
      <Testimonials />
      <Services />
      <Companies />
      <Team />
      <Contact />
      <Footer />
      <Map />
    </Container>
  )
}

export default Home
