import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(initialData) {
  let containerHeight = '30em';
  let rowHeight = '15em';
  let cellHeight = '16em';
  return (    
    <SimpleLayout>
      <div class="container" style={{height: containerHeight}}> 
      <div class="row" style={{height: rowHeight}}> 
        <div class="col-xs-12 col-xl-6 bg-primary" style={{height: cellHeight}}>
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-secondary" style={{height: cellHeight}}>
          
        </div>
      </div>
      <div class="row" style="height: 15em;"> 
        <div class="col-xs-12 col-xl-6 bg-success" style={{height: cellHeight}}>
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-danger" style={{height: cellHeight}}>
           
        </div>
      </div>
    </div>
    </SimpleLayout>
  )
}
