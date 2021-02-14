import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Text} from './components/Text';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>This font-weight is 'regular' </Text>
        <Text style={styles.boldFont}>This font-weight is 'bold' </Text>
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
