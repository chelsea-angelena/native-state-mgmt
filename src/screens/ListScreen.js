import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function ListScreen() {
const friends = [
  {name: 'bob', age: 20},
  {name: 'sue', age: 30},
  {name: 'moe', age: 40},
  {name: 'jow', age:50},
  {name: 'loo', age: 60},
  {name: 'you', age:70}
]

  return (
<View style={styles.container}>
      <FlatList
      keyExtractor={(friend)=> {
        return <Text>{friend.name}</Text>
      }}
data={friends}
renderItem={({item})=> {
  return <Text style={styles.text}>{item.name}-{item.age}</Text>
}}
// {(element) => {}}
// element === {item: {name : 'Froend #1}, index: 0}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 50,
    marginHorizontal: 50,

  },
  container: {
    margin: 20
  }
})
