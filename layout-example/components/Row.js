import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});