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
      <View
        style={{
          backgroundColor: 'orange',
        }}>
        <Text style={{fontSize: 16, padding: 15}}>Header</Text>
      </View>
      <View style={{flex: 10, justifyContent: 'center'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'pink',
          }}>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{backgroundColor: 'blue', padding: 70, borderRadius: 50}}
            />
          </View>
          <View
            style={{
              flex: 3,
            }}>
            <View style={{backgroundColor: 'red', margin: 20}}>
              <TextInput />
            </View>
            <View
              style={{backgroundColor: 'yellow', flex: 1, margin: 20}}></View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'orange',
        }}>
        <Text style={{fontSize: 16, padding: 15}}>Footer</Text>
      </View>
    </View>
  );
};

export default App;
