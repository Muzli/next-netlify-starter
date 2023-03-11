import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(initialData) {
  let height = 16;
  return (    
    <SimpleLayout>
      <div class="container" style="height: 30em;"> 
      <div class="row" style="height: 15em;"> 
        <div class="col-xs-12 col-xl-6 bg-primary" style={{height: height + 'em'}}>
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-secondary" style={{height: height + 'em'}}>
          
        </div>
      </div>
      <div class="row" style="height: 15em;"> 
        <div class="col-xs-12 col-xl-6 bg-success" style={{height: height + 'em'}}>
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-danger" style={{height: height + 'em'}}>
           
        </div>
      </div>
    </div>
    </SimpleLayout>
  )
}
