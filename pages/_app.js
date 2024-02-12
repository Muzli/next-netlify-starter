import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@styles/globals.css';
import { useEffect } from "react";

function Application({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return <Component {...pageProps} />
}

export default Application
