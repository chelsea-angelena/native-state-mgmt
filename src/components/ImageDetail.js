import React from 'react'
import {Image, View, Text, StyleSheet } from 'react-native'

export default function ImageDetail(props) {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.desc}>{props.description}</Text>
      <View>
      <Image source={props.img} style={styles.image}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 5
  },
  text: {
    paddingTop: 15,
paddingBottom: 5,
  },
  desc: {
    fontStyle: 'italic'
  },
  image: {
    width: 'auto',
    height: 200,
  }
})
