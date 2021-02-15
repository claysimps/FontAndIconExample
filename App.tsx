import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Text} from './components/Text';
import {MaterialIcon} from './components/Icon';
import {IconButton} from './components/IconButton';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>This font-weight is 'regular' </Text>
        <Text style={styles.boldFont}>This font-weight is 'bold' </Text>
        <MaterialIcon size="large" color="purple" name="home" />
        <MaterialIcon size="extraLarge" color="black" name="github" />
        <IconButton
          onPress={() => {}}
          color="white"
          size="extraLarge"
          name="facebook"
          text="Login in with Facebook"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldFont: {
    fontFamily: 'Nunito-Bold',
  },
});

export default App;
