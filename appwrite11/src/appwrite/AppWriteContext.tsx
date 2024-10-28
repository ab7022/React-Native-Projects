import { View, Text } from 'react-native'
import React, { createContext, FC, PropsWithChildren, useState } from 'react'
import {AppwriteService} from './service'

type AppContextType = {
    appwriteService: AppwriteService
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
export const AppwriteContext = createContext<AppContextType>({
    appwriteService: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn: () => {

    }
})
const AppWriteProvider:FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const defaultValue = {
    appwriteService: new AppwriteService(),
    isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppWriteProvider