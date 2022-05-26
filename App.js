
import React from 'react';
import ProgressBar from './src/ProgressBar';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.containerStyle}>
      <ProgressBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#2D2D2D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
