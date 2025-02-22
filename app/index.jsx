import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';
const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>Index</Text>
      <Button title = 'Welcome' onPress = {() => router.push('Welcome')}/>
    </ScreenWrapper>
  )
}

export default index