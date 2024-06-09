import React, { useState } from 'react';
import LanguageContext from './languageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('is');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;