import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function ColorCounter({color, onIncrease, onDecrease}) {
  return (
    <View>
      <Button onPress={()=> onIncrease()} title={`increase ${color}`}/>
      <Button onPress={()=> onDecrease()} title={`decrease ${color}`}/>
    </View>
  )
}
// const styles = StyleSheet.create({
//   style
// })
