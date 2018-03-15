import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class TopBar extends React.Component {

  _onPressButton() {
    console.log('TopBar Clicked!');
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Left</Text>
        </TouchableHighlight>
        {/*<Text>TopBar</Text>*/}
        <View style={{alignItems: 'center',}}>
          <Text style={{fontSize: 16}}>{this.props.title}</Text>{/*Ready to apply title from a parent component*/}
          <Text style={{fontSize: 10}}>{this.props.refreshDate || '-'}</Text>
        </View>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Right</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: 48,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    marginTop: 24,
    paddingStart: 16,
    paddingEnd: 16,
    elevation: 4,
  },
});

export default TopBar;