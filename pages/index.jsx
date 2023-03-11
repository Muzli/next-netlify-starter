import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(initialData) {
  return (    
    <SimpleLayout>
      <div class="container" style="height: 30em;"> 
      <div class="row" style="height: 15em;"> 
        <div class="col-xs-12 col-xl-6 bg-primary paint-background-img" style="height: 16 em;">
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-secondary garage-background-img" style="height: 16 em;">
          
        </div>
      </div>
      <div class="row" style="height: 15em;"> 
        <div class="col-xs-12 col-xl-6 bg-success spoiler-background-img" style="height: 16 em;">
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-danger lc-background-img" style="height: 16 em;">
           
        </div>
      </div>
    </div>
    </SimpleLayout>
  )
}
