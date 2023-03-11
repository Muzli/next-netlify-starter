import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(initialData) {
  return (    
    <SimpleLayout>
      <div class="container"> 
      <div class="row default-row-height"> 
        <div class="col-xs-12 col-xl-6 bg-primary default-cell-height">
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-secondary default-cell-height">
          
        </div>
      </div>
      <div class="row default-row-height"> 
        <div class="col-xs-12 col-xl-6 bg-success default-cell-height">
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-danger default-cell-height">
           
        </div>
      </div>
    </div>
    </SimpleLayout>
  )
}
