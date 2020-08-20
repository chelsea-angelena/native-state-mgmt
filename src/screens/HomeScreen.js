import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
     <Text style={styles.text}>HomeScreen</Text>
  <Button title='go to list demo' onPress={() => navigation.navigate('List')}/>
    <Button title='components' onPress={() => navigation.navigate('Components')}/>
    <Button title='Image' onPress={() => navigation.navigate('Image')}/>
    <Button title='State' onPress={() => navigation.navigate('State')}/>
        <Button title='Color' onPress={() => navigation.navigate('Color')}/>
                <Button title='Color Square' onPress={() => navigation.navigate('ColorButton')}/>
                      <Button title='Square Screen' onPress={() => navigation.navigate('SquareScreen')}/>
  </View>
     )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    margin: 24,
    padding: 24,
  }
});

export default HomeScreen;
