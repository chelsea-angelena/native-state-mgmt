import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'

export default function StateScreen() {
let [counter, setCounter]=useState(0)

  return (
    <View>
{/* cc */}
<Text>Current Count: {counter}</Text>
    </View>
  )
}
