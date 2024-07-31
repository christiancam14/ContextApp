import {NavigationContainer} from '@react-navigation/native';
// import {Text} from 'react-native';
import {BottomTabsNavigator} from './presentation/navigators/BottomTabsNavigator';
// import {Text} from 'react-native-reanimated/lib/typescript/Animated';

export const Main = () => {
  return (
    <NavigationContainer>
      {/* <Text>Hola mundo</Text> */}
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
