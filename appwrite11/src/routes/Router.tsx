import {  Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {AppwriteContext} from '../appwrite/AppWriteContext'
import Loading from '../components/Loading'
import {AppStack} from './AppStack'
import  AuthStack  from './AuthStack'
const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {appwriteService,isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext);

    useEffect(() => {
      appwriteService.getCurrentUser().then((response) => {
        setIsLoggedIn(false)
        if(response) {
          setIsLoggedIn(true)
        }
        
    })
.catch(_=>{
    setIsLoggedIn(false)
    setIsLoading(false)
})
   
}, [appwriteService,setIsLoggedIn])
    if(isLoading) {
      return <Loading />
    }
  return ( 
  <NavigationContainer>
    {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Router
