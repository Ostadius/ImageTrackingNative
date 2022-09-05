/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

// import Signature from 'react-native-signature-canvas';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<PropsWithChildren<{title: string}>> = ({
  children,
  title,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {


  const isDarkMode = useColorScheme() === 'dark';

  const logInput = (enteredText: string) => {
    console.log(enteredText);
  };
  // const togglePress = () => {
  //   setToggleView(!toggleView);
  //   console.log(toggleView);
  // };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[
            styles.viewContainer,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
          ]}>
          <Section title="Some Bullshit">Sup bishes</Section>
          <TextInput
            style={styles.textInput}
            placeholder="insert Dumb shit"
            onChangeText={logInput}
          />
          <Button
            title="Toggle XR"
            onPress={() => {
              setToggleView(!toggleView);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  canvasStyles: {
    width: 200,
    height: 100,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  viewContainer: {
    flexDirection: 'column',
  },
  textInput: {
    backgroundColor: 'gray',
    marginHorizontal: '10%',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
