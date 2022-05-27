import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import ProgressChild from './ProgressBarChild';
const ProgressBar = () => {
  const TOTAL_POINTS = 30000;
  const EARNED_POINTS = 25000;
  return (
    <View
      style={styles.progressContainer}>
      <AnimatedCircularProgress
        size={235}
        width={15}
        fill={(EARNED_POINTS / TOTAL_POINTS) * 100}
        rotation={180}
        duration={2000}
        tintColor="#CE8900"
        backgroundColor="#292727"
        style={{
          borderColor: 'rgba(212, 212, 212,0.1)',
          borderWidth: 1,
          borderRadius: 200,
        }}>
        {fill => {
          const points = (Math.round((fill * TOTAL_POINTS) / 100) + '').replace(
            /.(?=(?:.{3})+$)/g,
            '$&,',
          );
          return <ProgressChild value={points} />;
        }}
      </AnimatedCircularProgress>
    </View>
  );
};
export default ProgressBar;
const styles = StyleSheet.create({
  progressContainer:{
    marginTop: 20,
    borderColor: 'rgba(212, 212, 212,0.2)',
    borderWidth: 2,
    padding: 15,
    borderRadius: 200,
  }
})