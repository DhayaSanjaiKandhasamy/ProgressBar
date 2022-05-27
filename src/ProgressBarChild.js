import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './GradientText';
const ProgressBarChild = ({value}) => {

  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 190,
        borderWidth: 3,
        width: 215,
        height: 215,
      }}>
      <View
        style={{
          backgroundColor: '#000000',
          width: '100%',
          height: '100%',
        }}>
        <LinearGradient
          colors={['#545151', '#000000']}
          useAngle={true}
          angle={125}
          style={styles.linearGradient}>
          <Text style={{color: '#D4D4D4', fontWeight: 'bold', fontSize: 40}}>
          {value}
          </Text>
          <Text style={{color: '#D4D4D4', fontSize: 20, marginTop: 10}}>
            Points until Elite
          </Text>
          <GradientText style={styles.textStyle}>PREMIERE</GradientText>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ProgressBarChild;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  textStyle:
    { fontSize: 30,fontWeight:'bold', marginTop: 10}
  
});
