import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(initialData) {
  let containerHeight = '30';
  let rowHeight = '15';
  let cellHeight = '16';
  return (    
    <SimpleLayout>
      <div class="container" style={{height: containerHeight + 'em'}}> 
      <div class="row" style={{height: rowHeight + 'em'}}> 
        <div class="col-xs-12 col-xl-6 bg-primary" style={{height: cellHeight + 'em'}}>
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-secondary" style={{height: cellHeight + 'em'}}>
          
        </div>
      </div>
      <div class="row" style="height: 15em;"> 
        <div class="col-xs-12 col-xl-6 bg-success" style={{height: cellHeight + 'em'}}>
          
        </div>
        <div class="col-xs-12 col-xl-6 bg-danger" style={{height: cellHeight + 'em'}}>
           
        </div>
      </div>
    </div>
    </SimpleLayout>
  )
}
