import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavProvider from '@/components/NavContext';
import CircleAnimation from '@/components/CircleAnimation';
import styles from '@/styles/Home.module.scss';

const Home = () => (
    <NavProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio • Mayank Kumar</title>
      </Head>
      <main className={styles.main}>
        <Navigation />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <CircleAnimation />
      </main>
    </NavProvider>
  );
};

export default Home;
