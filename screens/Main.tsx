import React from 'react';
import {View} from 'react-native';
import NavButton from '../components/NavButton';

const Main: React.FunctionComponent = () => {
  return (
    <View>
      <NavButton screenToNavTo="Login" navParams={{userId: '1234'}} />
    </View>
  );
};

export default Main;
