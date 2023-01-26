/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [result, setResult] = useState<number | null>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="Compute"
            onPress={async () => {
              const value = await RTNCalculator?.add(3, 7);
              console.log(value);
              setResult(value ?? 0);
            }}
          />
          <Text>{result}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
