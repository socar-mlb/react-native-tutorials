import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-',
    };
  }

  _setRefreshDate(date) { // Called from CoinView's prop
    console.log('Updated: '+ date);
    this.setState({
      refreshDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          // hidden={true}
          backgroundColor="blue"
          barStyle="light-content"
        />
        <TopBar
          title="코인 시세"
          refreshDate={this.state.refreshDate}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <CoinView
            refreshDate={(date) => this._setRefreshDate(date)}// function type prop
            style={styles.coinView}
          />
        </ScrollView>
        {/*<View style={[styles.box, {backgroundColor: 'red'}]}></View>*/}
        {/*<View style={[styles.box, {backgroundColor: 'green'}]}></View>*/}
        {/*<View style={[styles.box, {backgroundColor: 'blue'}]}></View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row', // column
    // backgroundColor: 'yellow', // backgroundColor: '#fff',
    // alignItems: 'center', // edit here
    // justifyContent: 'space-around', // edit here using `center, space-around`
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  },
  coinView: {
    flex: 1,
    flexDirection: 'column', // row
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    // justifyContent: 'space-around', // center, space-around
  }
});
