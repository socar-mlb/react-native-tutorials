import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
        {/*<Text>TopBar</Text>*/}
        <Text style={{fontSize: 16}}>{this.props.title}</Text>{/*Ready to apply title from a parent component*/}
        <Text>Right</Text>
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
  },
});

export default TopBar;