/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {width, height} = Dimensions.get('window');

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'orange'}}></View>
      <View style={{flex: 8, justifyContent: 'center'}}>
        <View
          style={{
            height: height * 0.7,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              width: width * 0.3,
              height: height * 0.2,
              borderRadius: 60,
              backgroundColor: 'blue',
            }}></View>
          <View
            style={{
              width: width * 0.7,
              height: height * 0.4,
              backgroundColor: 'green',
            }}></View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'purple'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
