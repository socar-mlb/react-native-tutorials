import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CoinView from './components/CoinView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          backgroundColor="blue"
          barStyle="light-content"
        />
        {/*<View style={[styles.box, {backgroundColor: 'red'}]}></View>*/}
        {/*<View style={[styles.box, {backgroundColor: 'green'}]}></View>*/}
        {/*<View style={[styles.box, {backgroundColor: 'blue'}]}></View>*/}
        <CoinView></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row', // column
    backgroundColor: 'yellow', // backgroundColor: '#fff',
    // alignItems: 'center', // edit here
    // justifyContent: 'space-around', // edit here using `center, space-around`
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
});
