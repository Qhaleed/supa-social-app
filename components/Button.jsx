import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helper/common'
import { StyleSheet } from 'react-native-web'
import Loading from '../constants/Loading'
const Button = ({ 
    buttonStyle,
    textStyle,
    title='',
    onPress = () => {},
    loading = true,
    hasShadow = true,}) => {

        const shadowStyle ={
            shadowColor: theme.colors.dark,
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.5,
            shadowRadius: 8,
            elevation: 4,
        }

        if (loading) {
            return(
                <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
                    <Loading/>
                </View>
            )
        } return (
   <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
    <Text style={[styles.text, textStyle]}>{title}</Text>

   </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continues',
        borderRadius: theme.radius.xl,
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        fontWeigth: theme.fonts.bold
    }
})