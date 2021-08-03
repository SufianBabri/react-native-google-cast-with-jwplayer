import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.playerContainer}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  playerContainer: {
    height: 300,
    width: 500,
    margin: 40,
  },
});

export default App;
