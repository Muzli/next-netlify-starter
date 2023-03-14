import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(initialData) {
  return (    
    <SimpleLayout>
      <div className="container"> 
      <div className="row"> 
        <div className="col-xs-12 col-l-6 bg-primary default-cell-height garage-background-img">
          
        </div>
        <div className="col-xs-12 col-l-6 bg-secondary default-cell-height paint-background-img">
          
        </div>
      </div>
      <div className="row"> 
        <div className="col-xs-12 col-l-6 bg-success default-cell-height lc-background-img">
          
        </div>
        <div className="col-xs-12 col-l-6 bg-danger default-cell-height spoiler-background-img">
           
        </div>
      </div>
    </div>
    </SimpleLayout>
  )
}
