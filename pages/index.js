import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (    
    <div className="container">
      <Header />
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>        
        <p className="description">
          Got started by editing <code>pages/index.js</code>
        </p>
        <button type="button" className="btn btn-primary" >
          Launch demo modal
        </button>
      </main>

      <Footer />
    </div>
  )
}
