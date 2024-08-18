import { StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp } from '../helper/common'
import { hp } from '../helper/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import Loading from '../constants/Loading'

const welcome = () => {
  return (
   <ScreenWrapper bg={"white"}>
    <StatusBar style="dark"/>
    <View style={styles.container}>
      <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')}></Image>
      {/* App title */}
      <View style={{gap:20,}}>
        <Text style={styles.title}>AICG</Text>
        <Text style={styles.punchLine}>App development with react native</Text>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Button title='Getting Started' buttonStyle={{marginHorizontal: wp(3)}} onPress={() => {}}/>
      </View>
    </View>
   </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  
  },
  welcomeImage:{
    height:hp(30),
    width: wp(100),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text, 
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  punchLine: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text
  },
  footer: {
    gap: 30,
    width: '100%'
  }
})