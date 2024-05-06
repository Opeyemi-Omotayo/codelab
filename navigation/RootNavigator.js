import React from 'react'
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthNavigator'

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
