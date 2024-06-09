import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@styles/globals.css';
import { useEffect, useContext } from "react";
import { SSRProvider } from 'react-bootstrap';
import LanguageProvider from "utilities/Language/languageProvider";

function Application({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SSRProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </SSRProvider>
  );
}

export default Application
