import React,  {useReducer} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT=15

const reducer=(state, action)=>{
//state==={red: number, green: number, blue: number}
//  action===colortoChange: red || green || blue, amount: -15  || +15
switch (action.colorChange) {
  case 'red':
    //never change state directly
    // rebuild from scratch
    return{...state, red: state.red + action.amount}
    case 'green':
      return{...state, blue: state.blue + action.amount}
      case 'blue':
        return{...state, green: state.green + action.amount}
        default:
          return state
}
 };

export default function SquareScreen() {
  //dispatch = run my reducer
const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
console.log(state)
const {red, green, blue} = state
  return (
<View>
<View style={styles.container}>

  <ColorCounter
  onIncrease={()=>dispatch({colorChange: 'red', amount: COLOR_INCREMENT})}
  onDecrease={()=> dispatch({colorChange: 'red', amount:  -1 * COLOR_INCREMENT})}
  color="red"/>



    <ColorCounter
 onIncrease={()=>dispatch({colorChange: 'green', amount: COLOR_INCREMENT})}
  onDecrease={()=> dispatch({colorChange: 'green', amount:  -1 * COLOR_INCREMENT})}
  color="blue"/>

      <ColorCounter
  onIncrease={()=>dispatch({colorChange: 'blue', amount: COLOR_INCREMENT})}
  onDecrease={()=> dispatch({colorChange: 'blue', amount:  -1 * COLOR_INCREMENT})}
  color="blue"/>

</View>
  <View style={{
    height:400,
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: `rgb(${red},${green},${blue})`}}>
    <Text styles={styles.text}>hsl: (r:{red},b:{blue},g:{green})</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
   margin: 10,
 },
 text:{
   alignSelf: 'center',
   fontSize: 24,
 }
})

