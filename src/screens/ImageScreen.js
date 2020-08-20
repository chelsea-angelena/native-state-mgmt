import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
  return (
        <View style={styles.container}>
<ImageDetail
title="Beach"
description="This is what a beach prop looks like!"
img={require('../../assets/images/beach.jpg')}
/>
<ImageDetail
title="forest"
description="this is what a forest looks like!" img={require('../../assets/images/forest.jpg')}
/>
<ImageDetail
title="sky"
description="this is what a sky looks like!" img={require('../../assets/images/mountain.jpg')}
/>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  }
})

