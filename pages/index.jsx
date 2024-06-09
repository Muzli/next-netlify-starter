import { React, useContext } from 'react';
import LanguageContext from 'utilities/Language/languageContext.js';
import Home from './home';


// Make new versions of background images
// With 50-75% opacity
// Different sizes for different viewscreen sizes

// Nota mynd af crúsernum hans pabba fyrir bakgrunn brettakanta
// Pabbi sendir mynd, muna að afmá bílnúmer
// Myndin sem við erum með núna getur kannski virkað ágætlega 
// ef letrið er ekki miðjað í reitnum heldur yfir himninum

// Fyrir tjónaskoðun, taka einhverja fína mynd innan úr verkstæði
// Muna að afmá bílnúmer ef einhver sjást á mynd

// Bæta leitarreit í haus til að leita í vörulista

// Vill pabbi að verðin komi fram í vörulistanum?

export default function Index(initialData) {

  const { language } = useContext(LanguageContext);

  return (   
    <Home />
  )
}
