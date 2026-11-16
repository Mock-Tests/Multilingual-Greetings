import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'English',
  changeLanuage: () => {},
})

export default LanguageContext
