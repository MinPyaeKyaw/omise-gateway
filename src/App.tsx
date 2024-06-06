import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseConfig} from './components/core';
import {RootNavigation} from './navigations';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#d00f4c"
      />
      <NativeBaseConfig>
        <RootNavigation />
      </NativeBaseConfig>
    </NavigationContainer>
  );
}

export default App;
