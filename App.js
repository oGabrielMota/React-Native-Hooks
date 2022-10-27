import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'
import Home from './src/telas/Home'

export default function App() {
  return <SafeAreaView style={estilo.tela}>
            <Home/>
      </SafeAreaView>
      
}

const estilo = StyleSheet.create({
      tela:{
            flex: 1,
      }
})