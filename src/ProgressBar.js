import React from 'react';
import {Text, View} from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import ProgressChild from './ProgressBarChild';
const ProgressBar = () => {
  return (
    <View>
      <CircularProgressBase
        value={80}
        radius={115}
        rotation={180}
        inActiveStrokeWidth={15}
        activeStrokeWidth={15}
        inActiveStrokeColor={'#292727'}
        strokeLinecap='square'
        activeStrokeColor={'#CE8900'}
        activeStrokeSecondaryColor={'#F2DC87'}>
        <ProgressChild />
      </CircularProgressBase>
    </View>
  );
};
export default ProgressBar;
