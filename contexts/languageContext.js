import { useRouter } from 'next/router'
import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {
  const router = useRouter()
  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  return useContext(LanguageContext)
}

export default LanguageContextProvider
