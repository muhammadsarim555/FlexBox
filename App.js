/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TextInput,
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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            backgroundColor: 'orange',
          }}>
          <Text style={{fontSize: 16, padding: 60}}>Header</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
            }}>
            {[
              1,
              2,
              3,
              4,
              5,
              6,
              1,
              1,
              1,
              1,
              1,
              1,
              3,
              4,
              5,
              6,
              1,
              1,
              1,
              1,
              1,
              1,
            ].map((v) => (
              <View
                style={{
                  padding: 70,
                  backgroundColor: 'red',
                  margin: 30,
                }}></View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
