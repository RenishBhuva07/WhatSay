import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import {
  LogBox,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/Navigators/AppNavigator';


function App(): React.JSX.Element {
  const [userToken, setUserToken] = React.useState<string | null>("userToken");

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, [])

  return (
    <View
      style={{ flex: 1 }}
      collapsable={false}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <AppNavigator userToken={userToken} />
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </View>
  );
}

export default App;
