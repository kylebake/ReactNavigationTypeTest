import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {RootStackParamList} from '../RouteParams';

interface NavButtonProps<ScreenName extends keyof RootStackParamList> {
  screenToNavTo: ScreenName;
  navParams?: RootStackParamList[ScreenName];
}

function NavButton<ScreenName extends keyof RootStackParamList>(
  props: NavButtonProps<ScreenName>,
) {
  const {screenToNavTo, navParams} = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate(screenToNavTo, navParams);
  };

  return (
    <View>
      <Button onPress={onPress} title="Hey here" />
    </View>
  );
}

export default NavButton;
